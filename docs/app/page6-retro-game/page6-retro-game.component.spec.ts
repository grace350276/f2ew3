import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page6RetroGameComponent } from './page6-retro-game.component';

describe('Page6RetroGameComponent', () => {
  let component: Page6RetroGameComponent;
  let fixture: ComponentFixture<Page6RetroGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page6RetroGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page6RetroGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
