import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-page6-retro-game',
  templateUrl: './page6-retro-game.component.html',
  styleUrls: ['./page6-retro-game.component.scss'],
})
export class Page6RetroGameComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  sendMsg = ():void =>

    { const singleSize = $("[name = single]").length;

    const answerArr = new Array(singleSize);

    $("[name ='single']").each(function (index) {
      // const answer = $("input[name='place" + (index + 1) + "']:checked".val();
      // answerArr[index] = answer;
  });

  // anwserArr [index+singleSize] = singleAnswer;

  }
  }
