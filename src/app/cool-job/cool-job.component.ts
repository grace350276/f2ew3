import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cool-job',
  templateUrl: './cool-job.component.html',
  styleUrls: ['./cool-job.component.scss']
})

export class CoolJobComponent {

  one = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  two = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  three = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

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


}
