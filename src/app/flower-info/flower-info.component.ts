import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Flower} from "../flowers-list/flower";
import {FlowersService} from "../flowers-list/flowers.service";

@Component({
  selector: 'flower-info',
  templateUrl: './flower-info.component.html'
})
export class FlowerInfoComponent implements OnInit {

  flower: Flower;

  constructor(
    private flowerService: FlowersService,
    private activated: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activated.params.subscribe(
      params => {
        this.flower = this.flowerService.getFlowerById(+params['id'])
      }
    )
  }

}
