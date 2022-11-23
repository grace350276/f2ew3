import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlyTrueComponent } from './overly-true.component';

describe('OverlyTrueComponent', () => {
  let component: OverlyTrueComponent;
  let fixture: ComponentFixture<OverlyTrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlyTrueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlyTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
