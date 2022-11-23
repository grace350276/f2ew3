import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page7TheEndComponent } from './page7-the-end.component';

describe('Page7TheEndComponent', () => {
  let component: Page7TheEndComponent;
  let fixture: ComponentFixture<Page7TheEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page7TheEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page7TheEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
