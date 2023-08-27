const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId : "myApp",
    brokers: ['192.168.174.242:9092']
})