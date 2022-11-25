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
} from '@angular/cdk/drag-drop';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-cool-job',
  templateUrl: './cool-job.component.html',
  styleUrls: ['./cool-job.component.scss'],
})
export class CoolJobComponent implements OnInit {
  // overlayRef: any;
  // tplRef: any;
  // viewContainerRef: any;
  // constructor() {}
  // ngOnInit(): void {}

//拖曳cdk
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

  //限制拖曳數量
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

  AllIn: string[] = ['A', 'B'];

  one: string[] = [];

  two: string[] = [];

//overlay內的內容
  @ViewChild('tpl') tplRef!: TemplateRef<ElementRef>;
  overlayRef!: OverlayRef;

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

  // onClick() {
  //   this.overlayRef.attach(
  //     new TemplatePortal(this.tplRef, this.viewContainerRef)
  //   );
  // }
  onClose() {
    this.overlayRef.detach();
  }

  visinfo() {
    if (this.one[0] == 'A' && this.two[0] == 'B') {
      alert('true');
    } else {
      alert('false');
      this.overlayRef.attach(
        new TemplatePortal(this.tplRef, this.viewContainerRef)
      );
    }
  }
}
