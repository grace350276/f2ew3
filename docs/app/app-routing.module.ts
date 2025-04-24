import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { Page1IntroComponent } from './page1-intro/page1-intro.component';
import { Page2WeekFlowComponent } from './page2-week-flow/page2-week-flow.component';
import { Page3PdBacklogComponent } from './page3-pd-backlog/page3-pd-backlog.component';
import { Page4PdFlowComponent } from './page4-pd-flow/page4-pd-flow.component';
import { Page5RetroComponent } from './page5-retro/page5-retro.component';
import { Page6RetroGameComponent } from './page6-retro-game/page6-retro-game.component';
import { Page7TheEndComponent } from './page7-the-end/page7-the-end.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  // { path: '', redirectTo:'spots', pathMatch:'full'},
  { path: '', component: CoverPageComponent },
  { path: 'intro', component: Page1IntroComponent },
  { path: 'week-flow', component: Page2WeekFlowComponent },
  { path: 'pd-backlog', component: Page3PdBacklogComponent },
  { path: 'pd-flow', component: Page4PdFlowComponent },
  { path: 'retro', component: Page5RetroComponent },
  { path: 'retro-game', component: Page6RetroGameComponent },
  { path: 'the-end', component: Page7TheEndComponent },
  { path: '**', component: PageNotFoundComponent }





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
