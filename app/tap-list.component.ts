import {Component, EventEmitter} from 'angular2/core';
import {TapComponent} from './tap.component';
import {TapRoom} from './tap.model';
import { EditTapDetailComponent } from './edit-tap-details.component';
import {NewTapComponent} from './new-tap.component';
@Component({
  selector: 'tap-list',
  inputs: ['tapList'],
  outputs: ['onTapSelect'],
  directives: [TapComponent, EditTapDetailComponent, NewTapComponent],
  template: `
  <tap-display *ngFor="#tap of tapList" (click)="tapClicked(tap)" 
  [class.selected]="tap === selectedTap" [tap]="tap"></tap-display>
  <edit-tap-details *ngIf="selectedTap"[tap]="selectedTap"></edit-tap-details>
  <new-tap (onSubmitNewTap)="createTap($event)"></new-tap>
  `
})
export class TapListComponent{
  public tapList: TapRoom[];
  public onTapSelect: EventEmitter<TapRoom>;
  public selectedTap: TapRoom;
  constructor(){
    this.onTapSelect = new EventEmitter();
  }
  tapClicked(clickedTap: TapRoom): void {
    this.selectedTap = clickedTap;
    this.onTapSelect.emit(clickedTap);
  }
  createTap(tapArray): void{
    this.tapList.push(
      new TapRoom(tapArray[0],tapArray[1],tapArray[2],tapArray[3],this.tapList.length)
    );
  }
}
