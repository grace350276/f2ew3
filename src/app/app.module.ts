import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdkDragDropConnectedSortingExampleCompComponent } from './cdk-drag-drop-connected-sorting-example/cdk-drag-drop-connected-sorting-example.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CoolJobComponent } from './cool-job/cool-job.component';
import { SimpleDragComponent } from './simple-drag/simple-drag.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CdkDragDropConnectedSortingExampleCompComponent,
    CoolJobComponent,
    SimpleDragComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
