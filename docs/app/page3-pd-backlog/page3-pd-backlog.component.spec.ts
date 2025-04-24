import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3PdBacklogComponent } from './page3-pd-backlog.component';

describe('Page3PdBacklogComponent', () => {
  let component: Page3PdBacklogComponent;
  let fixture: ComponentFixture<Page3PdBacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page3PdBacklogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page3PdBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
