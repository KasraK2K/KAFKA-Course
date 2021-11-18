import { Injectable } from '@nestjs/common';

@Injectable()
export class HerosService {
  create() {
    return 'This action adds a new hero';
  }

  findAll() {
    return `This action returns all heros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hero`;
  }

  update(id: number) {
    return `This action updates a #${id} hero`;
  }

  remove(id: number) {
    return `This action removes a #${id} hero`;
  }
}
