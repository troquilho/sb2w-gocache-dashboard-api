const moment = require("moment");
const jwt = require("jsonwebtoken");
require('dotenv/config');

module.exports = {
    async createToken(req, res) {
        let expiryDate = moment().add(12, 'hours');
        const token = jwt.sign({ expiryDate }, process.env.NODEMON_API_KEY);

        return res.json({ token });
        console.log(token);
    }
}