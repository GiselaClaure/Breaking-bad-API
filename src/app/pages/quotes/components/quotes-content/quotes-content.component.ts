import { Component, OnInit } from '@angular/core';
import { QuotesModel } from '../../models/quotes.model';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quotes-content',
  templateUrl: './quotes-content.component.html',
  styleUrls: ['./quotes-content.component.scss']
})
export class QuotesContentComponent implements OnInit {
  public quotesList?: QuotesModel[];
    constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
    this.quotesService.getAllEpisodes().subscribe((element: any)=>{
      const apiResults: QuotesModel[]= element;
      const formattedResults= apiResults.map(({quote_id,quote,author})=>({
        quote_id,
        quote,
        author,
      }));
      this.quotesList = formattedResults;
      console.log(this.quotesList);
    })
  }

}
