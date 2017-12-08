import {Injectable} from '@angular/core';
import {Flower} from './flower';

const ROSE: Flower = {
  name: 'Rose',
  color: 'Red',
  size: 70,
  price: 100
};
const VIETNAM_ROSE: Flower = {
  name: 'Vietnam Rose',
  color: 'Pink',
  size: 50,
  price: 60
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

}
