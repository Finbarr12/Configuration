import cron from "node-cron";

cron.schedule(
  "*/5 * * * * *",
  () => {
    // console.log("this is a cron task");
  }

  //   {
  //     scheduled: true,
  //   }
);
