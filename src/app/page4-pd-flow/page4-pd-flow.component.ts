import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";



import { GAME2 } from '../shared/page4game';
import { IGame1 } from "../shared/IPage2game";

import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { RouterLink } from '@angular/router';
import { Z1, Z2, Z3 } from '../shared/page2game';


@Component({
  selector: 'app-page4-pd-flow',
  templateUrl: './page4-pd-flow.component.html',
  styleUrls: ['./page4-pd-flow.component.scss']
})
export class Page4PdFlowComponent implements OnInit {

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


  one: IGame1[] = Z1;

  two: IGame1[] = Z2;

  three: IGame1[] = Z3;

  AllIn: IGame1[] = GAME2;

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

    if (this.one.length==0 || this.two.length==0 || this.three.length==0 ) {



      this.overlayRef.attach(
        new TemplatePortal(this.tplFRef, this.viewContainerRef)
      );

      this.overlayRef.attach(
        new TemplatePortal(this.tplFRef, this.viewContainerRef)
      );
    } else if (this.one[0].game == 1 || this.two[0].game == 3 && this.three[0].game == 2) {


      this.overlayRef.attach(
        new TemplatePortal(this.tplRef, this.viewContainerRef)
      );
    } else {


      this.overlayRef.attach(
        new TemplatePortal(this.tplFRef, this.viewContainerRef)
      );
    }
  }

}
