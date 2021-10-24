import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  public BREAKINGBADURL:string = "https://breakingbadapi.com/api/";
  public QUOTESURL:string = `${this.BREAKINGBADURL}quotes`;
  constructor(private httpClient : HttpClient ) {}

  public getAllEpisodes() {
    return this.httpClient.get(this.QUOTESURL)
  }
  public getEpisode= (idCharacter: any) => {
    return this.httpClient.get(`${this.QUOTESURL}/${idCharacter}`)
  }
}
