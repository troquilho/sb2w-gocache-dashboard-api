const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const moment = require("moment");
const AuthToken = mongoose.model("AuthToken");
require('dotenv/config');

let checkToken = (req, res, next) => {
    const token = cleanToken(req.headers['sb2w_gocache_token']);
    if (token && searchToken(token)) {
        jwt.verify(token, process.env.NODEMON_API_KEY, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid.'
                });
            } else {
                if(moment() < moment(decoded.expiryDate)){
                    req.decoded = decoded;
                    next();
                }else{
                    return res.json({
                        success: false,
                        message: 'Auth token is expired.'
                    });
                }
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied.'
        });
    }
};

const cleanToken = (token) => (String(token).startsWith('Bearer ')) ? token.slice(7, token.length) : token;

const searchToken = async (token) => {
    const tok = await AuthToken.findOne({token})
    if(tok){
        return tok;
    }else{
        return null;
    }
}

let decodeToken = (token) => {
    return jwt.decode(token);
};

module.exports = {
    checkToken: checkToken,
    decodeToken: decodeToken
}