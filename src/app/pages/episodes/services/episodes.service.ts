import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  public BREAKINGBADURL:string = "https://breakingbadapi.com/api/";
  public EPISODESURL:string = `${this.BREAKINGBADURL}episodes`;
  constructor(private httpClient : HttpClient ) {}

  public getAllEpisodes() {
    return this.httpClient.get(this.EPISODESURL)
  }
  public getEpisode= (idCharacter: any) => {
    return this.httpClient.get(`${this.EPISODESURL}/${idCharacter}`)
  }
}
