import { Component, EventEmitter } from 'angular2/core';
import {TapListComponent} from'./tap-list.component';
import {TapRoom} from './tap.model'
@Component({
  selector: 'my-app',
  directives: [TapListComponent],
  template: `
  <div class = "container">
    <h1>Keg List</h1>
    <tap-list [tapList]="tapRoom" (onTapSelect)="tapWasSelected($event)"></tap-list>
  </div>
  `
})
export class AppComponent{
  public tapRoom: TapRoom[];
  constructor(){
    this.tapRoom = [
      new TapRoom("IPA", "Bud", 6, 10, 0),
    ];
  }
  tapWasSelected(clickedTap: TapRoom): void{

  }
}
