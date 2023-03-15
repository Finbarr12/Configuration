const node_schedule = require("node-schedule");
// console.log(node_schedule);

const dater = node_schedule.scheduleJob("40 * * * * *", function () {
  console.log("schedule job");
});
