import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page4PdFlowComponent } from './page4-pd-flow.component';

describe('Page4PdFlowComponent', () => {
  let component: Page4PdFlowComponent;
  let fixture: ComponentFixture<Page4PdFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page4PdFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page4PdFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
