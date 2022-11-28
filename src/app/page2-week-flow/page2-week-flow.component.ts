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
import { G1, G2, G3, G4, G5, G6, GAME1 } from "../shared/page2game";
import { IGame1 } from "../shared/IPage2game";
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { RouterLink } from '@angular/router';

@Component({
  selector: "app-page2-week-flow",
  templateUrl: "./page2-week-flow.component.html",
  styleUrls: ["./page2-week-flow.component.scss"],
})
export class Page2WeekFlowComponent implements OnInit {

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




  one: IGame1[] = G1;

  two: IGame1[] = G2;

  three: IGame1[] = G3;

  four: IGame1[] = G4;

  five: IGame1[] = G5;

  six: IGame1[] = G6;

  AllIn: IGame1[] = GAME1;



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

  onClose() {
    this.overlayRef.detach();
  }
  clickSuccess(){
    this.router.navigateByUrl('/pd-backlog');
  }

  clickWrong(){
    this.router.navigateByUrl('/intro');
  }


  visinfo() {
    if (this.one.length==0 || this.five.length==0 || this.six.length==0 || this.two.length==0 || this.three.length==0 || this.four.length==0 ) {



      this.overlayRef.attach(
        new TemplatePortal(this.tplFRef, this.viewContainerRef)
      );
    } else if (this.one[0].game == 2 && this.five[0].game == 3&& this.six[0].game == 6&& this.two[0].game == 1 && this.three[0].game == 1 && this.four[0].game == 1) {


      this.overlayRef.attach(
        new TemplatePortal(this.tplRef, this.viewContainerRef)
      );
    } else {


    this.overlayRef.attach(
      new TemplatePortal(this.tplFRef, this.viewContainerRef)
    );
  }






}}

