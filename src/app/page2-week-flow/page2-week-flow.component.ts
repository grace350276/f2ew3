import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { GAME1 } from '../shared/page2game';
import { IGame1 } from '../shared/IPage2game';

@Component({
  selector: 'app-page2-week-flow',
  templateUrl: './page2-week-flow.component.html',
  styleUrls: ['./page2-week-flow.component.scss']
})
export class Page2WeekFlowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get isOneAvailable(): boolean {
    return this.one && this.one.length < 1;
}

  OnePredicate = (): boolean => {
    return this.isOneAvailable;
}

get isTwoAvailable(): boolean {
  return this.two && this.two.length < 1;
}

TwoPredicate = (): boolean => {
  return this.isTwoAvailable;
}



one:IGame1[] = [];

two:IGame1[] = [];

AllIn:IGame1[] = GAME1;





  drop(event: CdkDragDrop<IGame1[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  visinfo(){




    if(this.one[0].game==1&&this.two[0].game==2){
      alert("true");

    }else{
  
      alert("false");
    }
  
  }

}
