require("dotenv").config();
console.log(process.env);

const { Kafka } = require('kafkajs')

const { KAFKA_USERNAME: username, KAFKA_PASSWORD: password } = process.env
const sasl = username && password ? { username, password, mechanism: 'plain' } : null
const ssl = !!sasl

// Create client instance configured to connect to the Kafka broker provided by
// the environment variable KAFKA_BOOTSTRAP_SERVER
const kafka = new Kafka({
  clientId: 'npm-slack-notifier',
  brokers: [process.env.KAFKA_BOOTSTRAP_SERVER],
  ssl,
  sasl
})

module.exports = kafka
