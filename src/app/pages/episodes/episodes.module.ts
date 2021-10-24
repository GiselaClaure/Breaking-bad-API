import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesContentComponent } from './components/episodes-content/episodes-content.component';


@NgModule({
  declarations: [
    EpisodesContentComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule { }
