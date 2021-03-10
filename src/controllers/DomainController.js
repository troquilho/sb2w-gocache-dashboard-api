const mongoose = require('mongoose');
const gocache = require('../config/gocache-api');
const Domain = mongoose.model("Domain");

module.exports = {
    async getAll(req, res) {
        const { paginate = false, limit = 10, page = 1, order = "desc", sortBy = "createdAt" } = req.query;
        let domains;
        if (paginate) {
            domains = await Domain.paginate({}, { page, limit: parseInt(limit), sort: { [sortBy]: order }, populate: ['account'] })
        } else {
            domains = await Domain.find().sort({ [sortBy]: order }).limit(parseInt(limit)).populate('account')
        }
        return res.json(domains);
    },
    
    async cronGetAndSetAllDomains(req, res) {
        const response = await gocache.get("domain");
        let domains = response.data.response.domains;
        for (let x = 0; x < domains.length; x++) {
            if(!await Domain.findOne({url_site: domains[x]})){
                await Domain.create({url_site: domains[x]})
            }
        }
        return res.json("ok");
    },

    async cronGetAndSetInfoDomain(req, res) {
        const domains = await Domain.find();
        for (let x = 0; x < domains.length; x++) {
            const response = await gocache.get(`domain/${domains[x].url_site}`);
            await Domain.findByIdAndUpdate({_id: domains[x]._id}, response.data.response)
        }
        return res.json("ok");
    },
}