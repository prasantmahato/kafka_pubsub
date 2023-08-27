# kafka_pubsub

## Tools required

- Node.js
- Docker
- Vs Code

## Step to execute

```bash
git clone "https://github.com/prasantmahato/kafka_pubsub.git"
cd kafka_pubsub
yarn install
```

- Get your PRIVATE_IP using

```bash
ifconfig
```
or
```bash
ipconfig
```

- ### Update client.js with your <private_ip>


- ### Start zookeeper and expose port 2181

```bash
docker run -p 2181:2181 zookeeper
```

- ### Start kafka container, expose PORT 9092 and setup ENV Variables

```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=192.168.174.242:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.174.242:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

- ### Admin creating topics with partitions

```bash
node admin.js
```

- ### Producer producing some message (name, location)

```bash
node producer.js PRASANT south
node producer.js AMIT north
node producer.js JACKSON north
node producer.js TRIVEDI south
```

- ### Multiple client consuming messages (open multiple terminals)

```bash
node client.js user-group-1
node client.js user-group-1
node client.js user-group-2
```

## ScreenShots

<img width="1680" alt="Screenshot 2023-08-26 at 11 50 06 PM" src="https://github.com/prasantmahato/kafka_pubsub/assets/62459775/bc13f487-778f-49c3-82d6-98152880fee6">

<img width="1680" alt="Screenshot 2023-08-26 at 11 50 13 PM" src="https://github.com/prasantmahato/kafka_pubsub/assets/62459775/af71c422-8047-48a0-984b-2a936b4b48ac">
