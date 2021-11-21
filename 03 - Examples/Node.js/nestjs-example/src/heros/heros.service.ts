import { Injectable } from '@nestjs/common';

@Injectable()
export class HerosService {
  createFirstHero(heroId: number, name: string) {
    const items = [
      { id: 1, name: 'Sword' },
      { id: 2, name: 'Ring' },
      { id: 3, name: 'Horse' },
      { id: 4, name: 'Gun' },
    ];
    const randomGift = items[Math.floor(Math.random() * items.length)];

    return {
      name,
      heroId,
      randomGift,
    };
  }
}
