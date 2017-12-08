import {Component, OnInit} from '@angular/core';
import {FlowersService} from './flowers.service';
import {Flower} from './flower';

@Component({
  selector: 'flowers-list',
  templateUrl: './flowers-list.component.html'
})
export class FlowersListComponent implements OnInit {

  flowers: Flower[];

  constructor(private flowersService: FlowersService) {
  }

  ngOnInit(): void {
    this.flowers = this.flowersService.getFlowers();
  }

}
