import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentValue = 0;
  public unSortedArray: number[] = [];
  public ascendingArray: number[] = [];
  public descendingArray: number[] = [];

  public addCurrentValue() {
    this.unSortedArray.push(this.currentValue);
  }

  public onClickCurrenteValue(value: number) { this.currentValue = value; }

  // sort in ascending order
  public sortInAscendingOrder() {
    this.ascendingArray = this.unSortedArray;
    this.ascendingArray.sort( ((a, b) => a - b));
  }

  // sort in descending order
  public async sortInDescendingOrder() {
    this.descendingArray = this.unSortedArray;
    await this.descendingArray.sort( (a, b) => (b - a));
  }

  public deleteLastValue() {
    const l = this.unSortedArray.length - 1;
    this.unSortedArray.splice( l, 1);
  }
  public resetCurrentValue() { this.currentValue = 0; }
  public resetUnsortedArray() { this.unSortedArray = []; }
  public resetAscendingArray() { this.ascendingArray = []; }
  public resetDescendingArray() { this.descendingArray = []; }

}
