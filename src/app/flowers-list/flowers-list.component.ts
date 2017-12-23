import {Component, OnInit} from '@angular/core';
import {FlowersService} from './flowers.service';
import {Flower} from './flower';
import {Router} from "@angular/router";

@Component({
  selector: 'flowers-list',
  templateUrl: './flowers-list.component.html',
  styles: [`
    .clickable {
      cursor: pointer;
    }
  `]
})
export class FlowersListComponent implements OnInit {

  flowers: Flower[];

  constructor(
    private flowersService: FlowersService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.flowers = this.flowersService.getFlowers();
  }

  showFlowerInfo(id: number) {
    let link = ['flower-info', id];
    this.router.navigate(link);
  }

}
