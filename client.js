const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId : "myApp",
    brokers: ['<private_ip>:9092']   // Put your private ip_address here
})