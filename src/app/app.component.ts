import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentValue = 0;
  public unSortedArray: number[] = [];
  public sortedArray: number[] = [];

  public addCurrentValue() {
    this.unSortedArray.push(this.currentValue);
  }

  public onClickCurrenteValue(value: number) { this.currentValue = value; }

  public sortFinalArray() {
    this.sortedArray = this.unSortedArray;
    this.sortedArray.sort( ((a, b) => a - b));
  }

  public deleteLastValue() {
    const l = this.unSortedArray.length - 1;
    this.unSortedArray.splice( l, 1);
  }
  public resetCurrentValue() { this.currentValue = 0; }
  public resetUnsortedArray() { this.unSortedArray = []; }
  public resetSortedArray() { this.sortedArray = []; }

}
