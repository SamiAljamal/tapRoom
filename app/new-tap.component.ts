import {Component, EventEmitter} from 'angular2/core';
import {TapRoom} from './tap.model';

@Component({
  selector: 'new-tap',
  outputs: ['onSubmitNewTap'],
  template:
  `
   <div class= "tap-form">
   <h3>Create New Tap:</h3>
   <input placeholder ="Name" class="col-sm-8 input-lg" #newName>
   <input placeholder ="Brand" class="col-sm-8 input-lg" #newBrand>
   <input placeholder ="Price" class="col-sm-8 input-lg" #newPrice>
   <input placeholder ="ABV" class="col-sm-8 input-lg" #newABV>
   <button (click)="addTap(newName,newBrand,newPrice,newABV)">Add</button>
  `
})

export class NewTapComponent {
  public onSubmitNewTap: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewTap = new EventEmitter();
  }
  addTap(tapName: HTMLInputElement, tapBrand: HTMLInputElement, tapPrice: HTMLInputElement, tapABV: HTMLInputElement){
    this.onSubmitNewTap.emit([tapName.value, tapBrand.value, tapPrice.value, tapABV.value]);
    tapName.value="";
    tapBrand.value="";
    tapPrice.value= "";
    tapABV.value = "";



  }

}
