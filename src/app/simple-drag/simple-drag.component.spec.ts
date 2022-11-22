import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDragComponent } from './simple-drag.component';

describe('SimpleDragComponent', () => {
  let component: SimpleDragComponent;
  let fixture: ComponentFixture<SimpleDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleDragComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
