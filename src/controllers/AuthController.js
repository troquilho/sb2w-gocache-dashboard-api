const mongoose = require("mongoose");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const AuthToken = mongoose.model("AuthToken");
require('dotenv/config');

module.exports = {
    async createToken(req, res) {
        let expiryDate = moment().add(12, 'hours');
        const token = jwt.sign({ expiryDate }, process.env.NODEMON_API_KEY);

        await AuthToken.create({token, expiryDate});
        return res.json({ token });
    },
    async cronRemoveExpiredTokens(req, res) {
        const tokens = await AuthToken.find();
        for (let x = 0; x < tokens.length; x++) {
            if(moment(tokens[x].expiryDate) < moment()){
                await AuthToken.findOneAndRemove({_id: tokens[x]._id})
            }
        }

        return res.json("ok");
    }
}