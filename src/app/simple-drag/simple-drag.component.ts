import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop connected sorting
 */

@Component({
  selector: 'app-simple-drag',
  templateUrl: './simple-drag.component.html',
  styleUrls: ['./simple-drag.component.scss'],
})
export class SimpleDragComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = [''];

  drop(event: CdkDragDrop<string[]>) {
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


}
