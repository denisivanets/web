import {Injectable} from '@angular/core';
import {Flower} from './flower';

const ROSE: Flower = {
  id: 1,
  name: 'Rose',
  color: 'Red',
  size: 70,
  price: 100,
  description: 'DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION'
};
const VIETNAM_ROSE: Flower = {
  id: 2,
  name: 'Vietnam Rose',
  color: 'Pink',
  size: 50,
  price: 60,
  description: 'DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION'
};

const FLOWERS: Flower[] = [
  ROSE,
  VIETNAM_ROSE
];

@Injectable()
export class FlowersService {

  getFlowers(): Flower[] {
    return FLOWERS;
  }

  getFlowerById(id: number): Flower {
    for(let flower of FLOWERS) {
      if (flower.id === id) {
        return flower;
      }
    }
    return null;
  }

}
