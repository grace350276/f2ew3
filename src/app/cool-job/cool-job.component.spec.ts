import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolJobComponent } from './cool-job.component';

describe('CoolJobComponent', () => {
  let component: CoolJobComponent;
  let fixture: ComponentFixture<CoolJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
