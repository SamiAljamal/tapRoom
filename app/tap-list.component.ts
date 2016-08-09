import {Component, EventEmitter} from 'angular2/core';
import {TapComponent} from './tap.component';
import {TapRoom} from './tap.model'
@Component({
  selector: 'tap-list',
  inputs: ['tapList'],
  directives: [TapComponent],
  template: `
  <tap-display *ngFor="#tap of tapList"[tap]="tap"></tap-display>
  `
})
export class TapListComponent{
  public tapList: TapRoom[];
}
