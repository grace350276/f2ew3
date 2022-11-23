import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cool-job',
  templateUrl: './cool-job.component.html',
  styleUrls: ['./cool-job.component.scss']
})

export class CoolJobComponent implements OnInit {

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

AllIn:string[] = ['A', 'B'];

one:string[] = [];

two:string[] = [];





  drop(event: CdkDragDrop<string[]>) {
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


    if(this.one[0]=="A"&&this.two[0]=="B"){
      alert("true");

    }else{
  
      alert("false");
    }
  
  }


}
