const CronJob = require('cron').CronJob;
const api = require('../config/api');

const jobSendEmailPendentActivities = new CronJob('00 00 12 * * 1-5', async () => {
    await api.post("/task-client-notify")
        .then(() => {
            console.log(new Date() + " - CRON => jobSendEmailPendentActivities => successful");
        })
        .catch(err => {
            console.log(new Date() + " - CRON => jobSendEmailPendentActivities => failed" + err);
        });
    }
)

module.exports = {
    jobSendEmailPendentActivities: jobSendEmailPendentActivities
}