require("dotenv").config();

const createHookReceiver = require("npm-hook-receiver");
const kafka = require('./kafka')

const producer = kafka.producer()

const main = async () => {
  await producer.connect()
  const server = createHookReceiver({
    // Secret created when registering the webhook with NPM.
    // Used to validate the payload.
    secret: process.env.HOOK_SECRET,

    // Path for the handler to be mounted on.
    mount: "/hook",
  });

  server.on("package:publish", async (event) => {
    // Send message to Kafka
  });

  server.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
  });
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
