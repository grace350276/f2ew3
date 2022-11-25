import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdkDragDropConnectedSortingExampleCompComponent } from './cdk-drag-drop-connected-sorting-example/cdk-drag-drop-connected-sorting-example.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {OverlayModule} from '@angular/cdk/overlay';
import { CoolJobComponent } from './cool-job/cool-job.component';
import { SimpleDragComponent } from './simple-drag/simple-drag.component';
import { FormsModule } from '@angular/forms';
import { Page1IntroComponent } from './page1-intro/page1-intro.component';
import { Page2WeekFlowComponent } from './page2-week-flow/page2-week-flow.component';
import { Page3PdBacklogComponent } from './page3-pd-backlog/page3-pd-backlog.component';
import { Page4PdFlowComponent } from './page4-pd-flow/page4-pd-flow.component';
import { Page5RetroComponent } from './page5-retro/page5-retro.component';
import { Page6RetroGameComponent } from './page6-retro-game/page6-retro-game.component';
import { Page7TheEndComponent } from './page7-the-end/page7-the-end.component';
import { OverlyTrueComponent } from './overly-true/overly-true.component';
import { OverlyFalseComponent } from './overly-false/overly-false.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoverPageComponent } from './cover-page/cover-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CdkDragDropConnectedSortingExampleCompComponent,
    CoolJobComponent,
    SimpleDragComponent,
    Page1IntroComponent,
    Page2WeekFlowComponent,
    Page3PdBacklogComponent,
    Page4PdFlowComponent,
    Page5RetroComponent,
    Page6RetroGameComponent,
    Page7TheEndComponent,
    OverlyTrueComponent,
    OverlyFalseComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CoverPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
