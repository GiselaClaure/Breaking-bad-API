import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesContentComponent } from './components/quotes-content/quotes-content.component';

const routes: Routes = [
  {
    path: '', component: QuotesContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
