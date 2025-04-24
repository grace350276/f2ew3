import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page5RetroComponent } from './page5-retro.component';

describe('Page5RetroComponent', () => {
  let component: Page5RetroComponent;
  let fixture: ComponentFixture<Page5RetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page5RetroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page5RetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
