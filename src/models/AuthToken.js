const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const AuthTokenSchema = new mongoose.Schema({
    token: { type: String, required: true },
    expiryDate: { type: Date, required: true},
}, { timestamps: {} });

AuthTokenSchema.plugin(mongoosePaginate);
mongoose.model('AuthToken', AuthTokenSchema);