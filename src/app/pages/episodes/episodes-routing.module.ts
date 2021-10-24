import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesContentComponent } from './components/episodes-content/episodes-content.component';

const routes: Routes = [
  {
    path: '', component: EpisodesContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
