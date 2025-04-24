import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-page7-the-end',
  templateUrl: './page7-the-end.component.html',
  styleUrls: ['./page7-the-end.component.scss'],
})
export class Page7TheEndComponent {
  options: AnimationOptions = {
    path: 'https://lottie.host/64c6b473-6fb1-4dff-ad5a-42495ef55dd5/AfyP3WvnnP.json',
    // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
