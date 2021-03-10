const CronJob = require('cron').CronJob;
const axios = require('axios');
require('dotenv/config');

const getDomains = new CronJob('00 */10 * * * *', async () => {
    await axios.post("http://localhost:5000/api/cron/domain/get-all")
        .then(() => {
            console.log(new Date() + " - CRON => getDomains => successful");
        })
        .catch(err => {
            console.log(new Date() + " - CRON => getDomains => failed" + err);
        });
    }
)

const saveAllDomains = new CronJob('00 */10 * * * *', async () => {
    await axios.post("http://localhost:5000/api/cron/account/save-domains")
        .then(() => {
            console.log(new Date() + " - CRON => saveAllDomains => successful");
        })
        .catch(err => {
            console.log(new Date() + " - CRON => saveAllDomains => failed" + err);
        });
    }
)

const saveInfoDomains = new CronJob('00 */10 * * * *', async () => {
    await axios.post("http://localhost:5000/api/cron/domain/save-info-domain")
        .then(() => {
            console.log(new Date() + " - CRON => saveInfoDomains => successful");
        })
        .catch(err => {
            console.log(new Date() + " - CRON => saveInfoDomains => failed" + err);
        });
    }
)

const removeExpiredTokens = new CronJob('00 */10 * * * *', async () => {
    await axios.post("http://localhost:5000/api/cron/token/remove-expired")
        .then(() => {
            console.log(new Date() + " - CRON => removeExpiredTokens => successful");
        })
        .catch(err => {
            console.log(new Date() + " - CRON => removeExpiredTokens => failed" + err);
        });
    }
)

module.exports = {
    getDomains: getDomains,
    saveAllDomains: saveAllDomains,
    saveInfoDomains: saveInfoDomains,
    removeExpiredTokens: removeExpiredTokens,
}