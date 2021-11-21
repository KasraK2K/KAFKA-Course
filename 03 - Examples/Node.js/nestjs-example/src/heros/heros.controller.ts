import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { HerosService } from './heros.service';
import { stringToObject } from '../utils/object-generator';

@Controller()
export class HerosController {
  constructor(
    private readonly herosService: HerosService,
    @Inject('HERO_SERVICE') private readonly client: ClientKafka,
  ) {}

  async onModuleInit() {
    this.client.subscribeToResponseOf('create.hero');
    this.client.subscribeToResponseOf('create.hero.reply');
    await this.client.connect();
  }

  @MessagePattern('create.hero')
  createFirstHero(@Payload() message): any {
    const realm = 'Nest';
    const { heroId, name } = stringToObject(message.value);
    const result = this.herosService.createFirstHero(heroId, name);

    this.client.emit('create.hero.reply', {
      headers: {
        kafka_nestRealm: realm,
      },
      key: heroId,
      value: {
        name: result.name,
        heroId: result.heroId,
        randomGift: result.randomGift,
      },
    });
  }

  @MessagePattern('create.hero.reply')
  createReward(@Payload() message): any {
    const { name, heroId, randomGift } = message.value;

    console.log(`"${name}" by id "${heroId}" earn a "${randomGift.name}".`);
  }
}
