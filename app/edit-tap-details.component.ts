import {Component} from 'angular2/core';
import {TapRoom} from './tap.model';

@Component({
  selector: 'edit-tap-details',
  inputs: ['tap'],
  template:`
  <div class="tap-form">
  <h3>Edit:</h3>
  <input [(ngModel)]="tap.name" class="col-sm-8 input-lg tap-form"/>
  <input [(ngModel)]="tap.brand" class="col-sm-8 input-lg tap-form"/>
  <input [(ngModel)]="tap.price" class="col-sm-8 input-lg tap-form"/>
  <input [(ngModel)]="tap.abv" class="col-sm-8 input-lg tap-form"/>
  </div>
  `
})

export class EditTapDetailComponent{
  public tapRoom: TapRoom;
}
