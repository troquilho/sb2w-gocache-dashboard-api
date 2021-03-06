const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const AccountSchema = new mongoose.Schema({
    domains: [{ type: mongoose.Schema.Types.ObjectId, ref: "Domain", required: false }],
    name: { type: String, required: true },
    goCacheToken: { type: String, required: true }
}, { timestamps: {} });

AccountSchema.plugin(mongoosePaginate);
mongoose.model('Account', AccountSchema);