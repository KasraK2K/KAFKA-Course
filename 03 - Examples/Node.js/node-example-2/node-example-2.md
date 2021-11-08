# Second Example in Node.js

---

In this example i run kafka in binary mode with 3 broker server.
for that i create 3 `server.properties` in **kafka/config** folder

This example code writed by using `kafkajs` package and create random animal name with `chance` pachage

```bash
npm i kafkajs
npm i chance
```
&nbsp;
&nbsp;

## Producer:
```javascript
import { Kafka } from 'kafkajs';
import Chance from 'chance';

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
});

const producer = kafka.producer({ allowAutoTopicCreation: true });
const topic = 'animals';
const chance = new Chance();

const produceMessage = async () => {
  const value = chance.animal();
  console.log(value);

  try {
    await producer.send({
      topic,
      messages: [{ value }],
    });
  } catch (error) {
    console.log(error);
  }
};

const run = async () => {
  // Producing
  await producer.connect();
  setInterval(produceMessage, 1000);
};

run().catch(console.error);
```
&nbsp;
&nbsp;

## Consumer:
```javascript
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
});

const consumer = kafka.consumer({ groupId: 'consumer-group' });
const topic = 'animals';

const run = async () => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
```
&nbsp;
&nbsp;

---

read more about kafkajs [Here](https://kafka.js.org/)

---