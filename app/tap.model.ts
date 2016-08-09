export class TapRoom{
  public pints: number = 124;
  public emptyTap: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public abv: number, public id: number) {
  }
}
