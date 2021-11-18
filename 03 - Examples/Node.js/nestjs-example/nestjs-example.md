# Example in [Nest.js](http://nestjs.com/)

---

In this example i choose nest.js and you can read full documentation about how implement Kafka in nest.js [here](https://docs.nestjs.com/microservices/kafka).
&nbsp;&nbsp;

## Step 1: Change **`main.js`** File
_Import this packages_
```typescript
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
```

_Create app as `microservice`_
```typescript
const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  AppModule,
  {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
    },
  },
);
```
&nbsp;&nbsp;

## STEP 2: Change **`module`** File
_Import this packages_
```typescript
import { ClientsModule, Transport } from '@nestjs/microservices';
```

_Write this codes into the `module`_
```typescript
imports: [
  ClientsModule.register([
    {
      name: 'HERO_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'hero',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'hero-consumer',
        },
      },
    },
  ]),
]
```
&nbsp;&nbsp;

## STEP 3: Change **`Controller`** File
_Import this packages_
```typescript
import {
  Client,
  ClientKafka,
  MessagePattern,
  Payload,
  Transport,
} from '@nestjs/microservices';
```

_Write this codes into the controller_
```typescript
@Client({
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'hero',
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'hero-consumer',
    },
    producer: {
      allowAutoTopicCreation: true,
    },
  },
})
client: ClientKafka;

async onModuleInit() {
  this.client.subscribeToResponseOf('createHerosMessage');
  await this.client.connect();
}

@MessagePattern('topic.name')
createReward(@Payload() message): any {
  console.log("topic.name value is:", message.value);
}
```