const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const DomainSchema = new mongoose.Schema({
    account: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: false },

    url_site: { type: String, required: true },
    cdn_mode: { type: String, required: false },
    ssl_type: { type: String, required: false },
    cache_mode: { type: String, required: false },
    smart_tpl: { type: String, required: false },
    ssl_mode: { type: String, required: false },
    caching_behavior: { type: String, required: false },
    waf_level: { type: String, required: false },
    waf_mode: { type: String, required: false },
    realhost: { type: String, required: false },
    hhost: { type: String, required: false },
    domain: { type: String, required: false },
    crypt: { type: String, required: false },
    
    cache_ttl: { type: Number, required: false },
    smart_ttl: { type: Number, required: false },
    expires_ttl: { type: Number, required: false },
    expire_bypass_sec: { type: Number, required: false },
    image_optimize_level: { type: Number, required: false },
    user_id: { type: Number, required: false },

    image_optimize_metadata: { type: Boolean, required: false },
    image_optimize_progressive: { type: Boolean, required: false },
    image_optimize: { type: Boolean, required: false },
    image_optimize_webp: { type: Boolean, required: false },
    rate_limit_status: { type: Boolean, required: false },
    deploy_mode: { type: Boolean, required: false },
    tls10: { type: Boolean, required: false },
    tls11: { type: Boolean, required: false },
    rate_limit_ignore_static_content: { type: Boolean, required: false },
    header_geoip_org: { type: Boolean, required: false },
    header_geoip_country: { type: Boolean, required: false },
    header_geoip_continent: { type: Boolean, required: false },
    smart_status: { type: Boolean, required: false },
    gzip_status: { type: Boolean, required: false },
    cache_302: { type: Boolean, required: false },
    cache_404: { type: Boolean, required: false },
    cache_301: { type: Boolean, required: false },
    rate_limit_ignore_known_bots: { type: Boolean, required: false },
    ignore_vary: { type: Boolean, required: false },
    ignore_expires: { type: Boolean, required: false },
    ignore_cache_control: { type: Boolean, required: false },
    expires_status: { type: Boolean, required: false },
    waf_status: { type: Boolean, required: false },
    header_device_type: { type: Boolean, required: false }
}, { timestamps: {} });

DomainSchema.plugin(mongoosePaginate);
mongoose.model('Domain', DomainSchema);