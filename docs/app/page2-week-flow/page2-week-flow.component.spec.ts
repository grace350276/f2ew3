import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2WeekFlowComponent } from './page2-week-flow.component';

describe('Page2WeekFlowComponent', () => {
  let component: Page2WeekFlowComponent;
  let fixture: ComponentFixture<Page2WeekFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2WeekFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page2WeekFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
