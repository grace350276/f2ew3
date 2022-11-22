import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CdkDragDropConnectedSortingExampleComponent } from './cdk-drag-drop-connected-sorting-example/cdk-drag-drop-connected-sorting-example.component';

const routes: Routes = [
  // { path: 'drag&drop', component: CdkDragDropConnectedSortingExampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
