import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkDragDropConnectedSortingExampleCompComponent} from './cdk-drag-drop-connected-sorting-example/cdk-drag-drop-connected-sorting-example.component';

const routes: Routes = [
  {path: 'dragDrop', component: CdkDragDropConnectedSortingExampleCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
