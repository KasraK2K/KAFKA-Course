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
