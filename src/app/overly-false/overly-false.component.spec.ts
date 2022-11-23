import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlyFalseComponent } from './overly-false.component';

describe('OverlyFalseComponent', () => {
  let component: OverlyFalseComponent;
  let fixture: ComponentFixture<OverlyFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlyFalseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlyFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
