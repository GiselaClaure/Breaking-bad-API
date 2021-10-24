import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesContentComponent } from './components/quotes-content/quotes-content.component';


@NgModule({
  declarations: [
    QuotesContentComponent
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule
  ]
})
export class QuotesModule { }
