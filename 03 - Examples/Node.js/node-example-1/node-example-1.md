# First Example in Node.js

---

In this example i chose 2 npm packages.

```bash
npm i node-rdkafka
npm i avsc
```

This packages are useful for access kafka to create stream and serialize data to send as event.
&nbsp;
&nbsp;

## Producer:
```javascript
console.log('producer...');

import Kafka from 'node-rdkafka';
import eventType from '../eventType.js';

const producer = Kafka.Producer.createWriteStream(
  { 'metadata.broker.list': 'localhost:9092' },
  {},
  { topic: 'test' }
);

const randomFromArray = (...args) => {
  return args[Math.floor(Math.random() * args.length)];
};

const getRandomCategory = () => {
  return randomFromArray('CAT', 'DOG');
};

const getRandomNoise = (animal) => {
  const noises = animal === 'CAT' ? ['purr', 'meow'] : ['woof', 'bark'];
  return randomFromArray(...noises);
};

const queueMessage = () => {
  const category = getRandomCategory();
  const noise = getRandomNoise(category);
  const event = { category, noise };
  const success = producer.write(eventType.toBuffer(event));
  success
    ? console.log('message wrote successfully to producer stream.')
    : console.log('something went wrong.');
};

setInterval(() => {
  queueMessage();
}, 3000);
```
&nbsp;
&nbsp;

## Consumer:
```javascript
console.log('consumer...');

import Kafka from 'node-rdkafka';
import eventType from '../eventType.js';

const consumer = Kafka.KafkaConsumer(
  {
    'metadata.broker.list': 'localhost:9092',
    'group.id': 'kafka',
  },
  {},
  { topic: 'test' }
);

consumer.connect();

consumer
  .on('ready', () => {
    console.log('consumer ready...');
    consumer.subscribe(['test']);
    consumer.consume();
  })
  .on('data', (data) => {
    console.log(`received message: ${eventType.fromBuffer(data.value)}`);
  });
```
&nbsp;
&nbsp;

## Event:
```javascript
import avro from 'avsc';

export default avro.Type.forSchema({
  type: 'record',
  fields: [
    {
      name: 'category',
      type: {
        type: 'enum',
        symbols: ['CAT', 'DOG'],
      },
    },
    {
      name: 'noise',
      type: 'string',
    },
  ],
});
```