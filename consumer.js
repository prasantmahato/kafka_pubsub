const { kafka } = require("./client");

const group = process.argv[2];


async function init(){
    const consumer = kafka.consumer({
        groupId : group
    });

    console.log("Connecting consumer...");
    await consumer.connect();
    console.log("Connecting consumer...");

    await consumer.subscribe({ topics : ["rider-updates"], fromBeginning: true });

    await consumer.run({
        eachMessage : async ({topic, partition, message, heartbeat, pause}) => {
            console.log(`['${group}: ${topic}: PARTITION : ${partition}:']`, message.value.toString())
        }
    });

}

init();