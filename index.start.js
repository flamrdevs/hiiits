require("./dist");

async function start() {
  return await hiiits.app.listen({
    host: "0.0.0.0",
    port: Number(process.env.PORT || 3000),
  });
}

start()
  .then((address) => {
    console.log(`[hiiits]:${address}`);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
