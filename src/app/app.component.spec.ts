import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  const mockArray: number[] = [4, 9, 7, 2, 1, 3, 5, 6, 8];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then( () => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });

  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should return 0 for the current value', () => {
    expect(component.currentValue).toEqual(0);
  });

  it('should return 0 for unSortedArray.lenght', () => {
    expect(component.unSortedArray.length).toEqual(0);
  });
  it('should return 0 for sortedArray.lenght', () => {
    expect(component.ascendingArray.length).toEqual(0);
  });

  it('should return 1 for sortedArray.lenght', () => {
    component.currentValue = 11;
    component.addCurrentValue();
    expect(component.unSortedArray[0]).toEqual(11);
    expect(component.unSortedArray.length).toEqual(1);
  });

  it('should add 5 to currentValue', () => {
    component.onClickCurrenteValue(5);
    expect(component.currentValue).toEqual(5);
  });

  it('should call addCurrentValue', () => {
    spyOn(component, 'onClickCurrenteValue');

    const buttonFive = fixture.debugElement.nativeElement.querySelector('#five');
    buttonFive.click();
    component.unSortedArray = [];
    expect(component.onClickCurrenteValue).toHaveBeenCalled();
  });

  it('should delete last value in unsoted array', () => {
    component.unSortedArray = mockArray;
    component.deleteLastValue();
    expect(component.unSortedArray.length).toEqual(8);
  });

  it('should reset current value', () => {
    component.currentValue = 20;
    component.resetCurrentValue();
    expect(component.currentValue).toEqual(0);
  });

  it('should reset unsorted array', () => {
    component.unSortedArray = mockArray;
    component.resetUnsortedArray();
    expect(component.unSortedArray.length).toEqual(0);
  });

  it('should reset ascending array', () => {
    component.ascendingArray = mockArray;
    component.resetAscendingArray();
    expect(component.ascendingArray.length).toEqual(0);
  });

  it( 'should reset descending array', () => {
    component.descendingArray = mockArray;
    component.resetDescendingArray();
    expect(component.descendingArray.length).toEqual(0);
  });

  function arrayHasNineValue() {

  }
});



describe('AppComponent test sort method', () => {

  let fixture2: ComponentFixture<AppComponent>;
  let component: AppComponent;
  const mockArray: number[] = [4, 9, 7, 2, 1, 3, 5, 6, 8];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then( () => {
      fixture2 = TestBed.createComponent(AppComponent);
      component = fixture2.componentInstance;
    });

  }));

  it('should sort ascending array in ascending order', () => {
    component.unSortedArray = mockArray;
    component.sortInAscendingOrder();
    const index = Math.floor( Math.random() * (9));
    expect(component.ascendingArray[index]).toEqual(index + 1);
  });

  it('should sort descending array in descending order', () => {
    component.unSortedArray = mockArray;
    component.sortInDescendingOrder();
    const index2 = Math.floor( Math.random() * (9));
    expect(component.descendingArray[index2]).toEqual(9 - index2);
  });


});
