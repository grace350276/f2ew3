import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

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

  // visinfo() {

  //     this.overlayRef.attach(
  //       new TemplatePortal(this.tplRef, this.viewContainerRef)
  //     )
  // };


  visinfo() {

    // 正解 $('#place1').attr('checked') === undefined
    // 正解 $('#place2').prop('checked') === true
    // 正解 $('.checkBox3').attr('#place3') === undefined
    // 正解 $('#place4').prop('checked') === true

    if ($('#place1').attr('checked') === undefined &&  $('#place2').prop('checked') === true  &&  $('.checkBox3').attr('#place3') === undefined &&  $('#place4').prop('checked') === true )
    {
        this.overlayRef.attach(
        new TemplatePortal(this.tplRef, this.viewContainerRef)
      );
    }
    else
    {
        this.overlayRef.attach(
        new TemplatePortal(this.tplFRef, this.viewContainerRef)
      );

    }

  };
}
