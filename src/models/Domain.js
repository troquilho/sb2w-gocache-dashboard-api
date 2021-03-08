const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const DomainSchema = new mongoose.Schema({
    cache_ttl: {type: Number, required: false},
    deploy_mode: {type: Boolean, required: false},
    smart_tpl: {type: String, required: false},
    ssl_mode: {type: String, required: false},
    smart_status: {type: Boolean, required: false},
    gzip_status: {type: Boolean, required: false},
    cache_302: {type: Boolean, required: false},
    cache_404: {type: Boolean, required: false},
    cache_301: {type: Boolean, required: false},
    caching_behavior: {type: String, required: false},
    smart_ttl: {type: Number, required: false},
    expires_ttl: {type: Number, required: false},
    cdn_mode: {type: String, required: false},
    ignore_vary: {type: Boolean, required: false},
    ignore_expires: {type: Boolean, required: false},
    ignore_cache_control: {type: Boolean, required: false},
    expires_status: {type: Boolean, required: false},
    expire_bypass_sec: {type: Number, required: false},
    waf_status: {type: Boolean, required: false},
    waf_level: {type: String, required: false},
    waf_mode: {type: String, required: false},
    header_geoip_country: {type: Boolean, required: false},
    header_device_type: {type: Boolean, required: false},

    url_site: {type: String, required: false},
}, { timestamps: {} });

DomainSchema.plugin(mongoosePaginate);
mongoose.model('Domain', DomainSchema);