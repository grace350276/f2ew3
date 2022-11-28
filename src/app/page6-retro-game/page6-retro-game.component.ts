import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-page6-retro-game',
  templateUrl: './page6-retro-game.component.html',
  styleUrls: ['./page6-retro-game.component.scss'],
})
export class Page6RetroGameComponent implements OnInit {
   router: any;

  @ViewChild('tpl') tplRef!: TemplateRef<any>;
  overlayRef!: OverlayRef;

  @ViewChild('tplFalse') tplFRef!: TemplateRef<any>;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    // 設定彈窗出來時的定位
    const strategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const configs = new OverlayConfig({
      hasBackdrop: true,
      positionStrategy: strategy,
    });

    this.overlayRef = this.overlay.create(configs);
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    });
  }


  onClose() {
    this.overlayRef.detach();
  }
  clickSuccess(){
    this.router.navigateByUrl('/pd-backlog');
  }

  clickWrong(){
    this.router.navigateByUrl('/intro');
  }

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
