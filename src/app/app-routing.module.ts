import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { Page1IntroComponent } from './page1-intro/page1-intro.component';
import { Page2WeekFlowComponent } from './page2-week-flow/page2-week-flow.component';
import { Page3PdBacklogComponent } from './page3-pd-backlog/page3-pd-backlog.component';
import { Page4PdFlowComponent } from './page4-pd-flow/page4-pd-flow.component';
import { Page5RetroComponent } from './page5-retro/page5-retro.component';
import { Page6RetroGameComponent } from './page6-retro-game/page6-retro-game.component';
import { Page7TheEndComponent } from './page7-the-end/page7-the-end.component';

const routes: Routes = [
  // { path: '', redirectTo:'spots', pathMatch:'full'},
  { path: '', component: AppComponent },
  { path: 'intro', component: Page1IntroComponent },
  { path: 'week-flow', component: Page2WeekFlowComponent }




];

@NgModule({
  // declarations: [
  //   AppComponent,
  //   Page1IntroComponent,
  //   Page2WeekFlowComponent
  // ],

  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
