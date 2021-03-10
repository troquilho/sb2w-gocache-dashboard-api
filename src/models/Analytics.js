const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const AnalyticsSchema = new mongoose.Schema({
    domain: { type: mongoose.Schema.Types.ObjectId, ref: "Domain", required: true }
}, { timestamps: {} });

AnalyticsSchema.plugin(mongoosePaginate);
mongoose.model('Analytics', AnalyticsSchema);