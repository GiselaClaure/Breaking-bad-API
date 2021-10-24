import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsContentComponent } from './components/character-details-content/character-details-content.component';

const routes: Routes = [
  {
    path: '', component: CharacterDetailsContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterDetailsRoutingModule { }
