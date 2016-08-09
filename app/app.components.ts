import { Component } from 'angular2/core';
@Component({
  selector: 'my-app',
  template: `
  <div class = "container">
    <h1>Keg List</h1>
    <ul *ngFor="#tap of tapRoom">
    <li><h3> Name: {{tap.name}}</h3><ul><h4><li> Brand: {{tap.brand}}</li><li>Price: {{tap.price}}</li><li>ABV: {{tap.abv}}%</li></h4></ul></li>
    </ul>

  `
})
export class AppComponent{
  public tapRoom: TapRoom[];
  constructor(){
    this.tapRoom = [
      new TapRoom("IPA", "Bud", 6, 10, 0),
      new TapRoom("Miller Draft", "Miller", 6, 7, 1)
    ];
  }
}

export class TapRoom {
  public tapEmpty: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public abv: number, public id: number) {

  }
}
