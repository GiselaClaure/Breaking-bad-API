import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailsRoutingModule } from './character-details-routing.module';
import { CharacterDetailsContentComponent } from './components/character-details-content/character-details-content.component';


@NgModule({
  declarations: [
    CharacterDetailsContentComponent
  ],
  imports: [
    CommonModule,
    CharacterDetailsRoutingModule
  ]
})
export class CharacterDetailsModule { }
