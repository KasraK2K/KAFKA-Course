import { Controller } from '@nestjs/common';
import {
  Client,
  ClientKafka,
  MessagePattern,
  Payload,
  Transport,
} from '@nestjs/microservices';
import { HerosService } from './heros.service';

@Controller()
export class HerosController {
  constructor(private readonly herosService: HerosService) {}

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

  @MessagePattern('createHerosMessage')
  createFirstHero(@Payload() message): any {
    const realm = 'Nest';
    const { heroId, name } = this.stringToObject(message.value);
    const items = [
      { id: 1, name: 'Sword' },
      { id: 2, name: 'Ring' },
      { id: 3, name: 'Horse' },
      { id: 4, name: 'Gun' },
    ];
    const randomGift = items[Math.floor(Math.random() * items.length)];

    this.client.emit('rewardsHerosMessage', {
      name,
      heroId,
      randomGift,
    });

    return {
      headers: {
        kafka_nestRealm: realm,
      },
      key: heroId,
      value: {
        name,
        heroId,
        randomGift,
      },
    };
  }

  @MessagePattern('rewardsHerosMessage')
  createReward(@Payload() message): any {
    const { name, heroId, randomGift } = message.value;

    console.log(
      `Hero "${name}" with id "${heroId}" created and earn item "${randomGift.name}" as a reward`,
    );
  }

  private stringToObject(text: string): Record<string, any> {
    return JSON.parse(
      text.replace(/(\w+:)|(\w+ :)/g, (matched) => {
        return `"${matched.substring(0, matched.length - 1)}":`;
      }),
    );
  }
}
