import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { GAME1 } from "../shared/page2game";
import { IGame1 } from "../shared/IPage2game";

@Component({
  selector: "app-page2-week-flow",
  templateUrl: "./page2-week-flow.component.html",
  styleUrls: ["./page2-week-flow.component.scss"],
})
export class Page2WeekFlowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  get isOneAvailable(): boolean {
    return this.one && this.one.length < 1;
  }

  OnePredicate = (): boolean => {
    return this.isOneAvailable;
  };

  get isTwoAvailable(): boolean {
    return this.two && this.two.length < 1;
  }

  TwoPredicate = (): boolean => {
    return this.isTwoAvailable;
  };

  get isThreeAvailable(): boolean {
    return this.three && this.three.length < 1;
  }

  ThreePredicate = (): boolean => {
    return this.isThreeAvailable;
  };

  get isFourAvailable(): boolean {
    return this.four && this.four.length < 1;
  }

  FourPredicate = (): boolean => {
    return this.isFourAvailable;
  };

  get isFiveAvailable(): boolean {
    return this.five && this.five.length < 1;
  }

  FivePredicate = (): boolean => {
    return this.isFiveAvailable;
  };

    get isSixAvailable(): boolean {
    return this.six && this.six.length < 1;
  }

  SixPredicate = (): boolean => {
    return this.isSixAvailable;
  };

  one: IGame1[] = [];

  two: IGame1[] = [];

  three: IGame1[] = [];

  four: IGame1[] = [];

  five: IGame1[] = [];

  six: IGame1[] = [];

  AllIn: IGame1[] = GAME1;

  drop(event: CdkDragDrop<IGame1[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  visinfo() {
    if (this.one[0].game == 2 && this.five[0].game == 3&& this.six[0].game == 6&& this.two[0].game == 1 && this.three[0].game == 1 && this.four[0].game == 1) {
      alert("true");
    } else {
      alert("false");
    }
  }
}
