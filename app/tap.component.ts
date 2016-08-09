import { Component } from 'angular2/core';
import { TapListComponent} from './tap-list.component';
import {TapRoom} from './tap.model';
@Component({
  selector: 'tap-display',
  inputs: ['tap'],
  template: `
  <ul>
  <li><h3> Name: {{tap.name}}</h3><ul><h4><li> Brand: {{tap.brand}}</li><li>Price: $ {{tap.price}}</li><li>ABV: {{tap.abv}}%</li><li>{{tap.pints}} pints</li></h4></ul></li>
  </ul><button (click)="tapClicked(tap)">Edit</button><button (click)="sellPint()">subtract Pint</button>
  `
})

export class TapComponent {
  public tap: TapRoom;
  sellPint(): void {
    this.tap.pints --;
    console.log(this.tap.pints);
  }
}
