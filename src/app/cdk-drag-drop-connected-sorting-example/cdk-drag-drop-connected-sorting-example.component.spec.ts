import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CdkDragDropConnectedSortingExampleCompComponent} from './cdk-drag-drop-connected-sorting-example.component';

describe('CdkDragDropConnectedSortingExampleComponent', () => {
  let component: CdkDragDropConnectedSortingExampleCompComponent;
  let fixture: ComponentFixture<CdkDragDropConnectedSortingExampleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkDragDropConnectedSortingExampleCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkDragDropConnectedSortingExampleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
