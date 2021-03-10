const mongoose = require('mongoose');
const gocache = require('../config/gocache-api');
const Account = mongoose.model("Account");
const Domain = mongoose.model("Domain");
require('dotenv/config');

module.exports = {
    async getAll(req, res) {
        const { paginate = false, limit = 10, page = 1, order = "desc", sortBy = "createdAt" } = req.query;
        let accounts;
        if (paginate) {
            accounts = await Account.paginate({}, { page, limit: parseInt(limit), sort: { [sortBy]: order }, populate: ['domains'] })
        } else {
            accounts = await Account.find().sort({ [sortBy]: order }).limit(parseInt(limit)).populate('domains')
        }
        return res.json(accounts);
    },

    async cronSaveAllDomains(req, res) {
        const domains = await Domain.find();
        for (let x = 0; x < domains.length; x++) {
            let d = await Account.findOne();
            const dInclude = (d.domains != undefined) ? d.domains : [];
            if (!dInclude.includes(domains[x]._id)) {
                dInclude.push(domains[x]._id);
            }
            d.domains = dInclude;
            const updated = await Account.findOneAndUpdate({ _id: d._id }, d);
            await Domain.findOneAndUpdate({ _id: domains[x]._id }, {account: updated._id});
        }
        return res.json("ok");
    }
}