import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:`home`, loadChildren:()=> import ('./pages/home/home.module').then (m=> m.HomeModule),
  },
  {
    path:`characters`, loadChildren:()=> import ('./pages/characters/characters.module').then (m=> m.CharactersModule),
  },
  {
    path:`characters/:idCharacter`, loadChildren:()=> import ('./pages/character-details/character-details.module').then (m=> m.CharacterDetailsModule),
  },
  {
    path:`quotes`, loadChildren:()=> import ('./pages/quotes/quotes.module').then (m=> m.QuotesModule),
  },
  {
    path:`episodes`, loadChildren:()=> import ('./pages/episodes/episodes.module').then (m=> m.EpisodesModule),
  },
  {
    path:'', redirectTo:'home',pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
