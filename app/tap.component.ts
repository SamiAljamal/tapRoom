import { Component } from 'angular2/core';
import {TapRoom} from './tap.model'
@Component({
  selector: 'tap-display',
  inputs: ['tap'],
  template: `
  <ul>
  <li><h3> Name: {{tap.name}}</h3><ul><h4><li> Brand: {{tap.brand}}</li><li>Price: $ {{tap.price}}</li><li>ABV: {{tap.abv}}%</li></h4></ul></li>
  </ul><button>Edit</button>
  `
})

export class TapComponent {
  public taproom: TapRoom;
}
