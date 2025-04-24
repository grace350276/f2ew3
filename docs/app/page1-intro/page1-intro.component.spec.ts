import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1IntroComponent } from './page1-intro.component';

describe('Page1IntroComponent', () => {
  let component: Page1IntroComponent;
  let fixture: ComponentFixture<Page1IntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1IntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page1IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
