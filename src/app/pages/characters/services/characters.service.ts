import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  public BREAKINGBADURL:string = "https://breakingbadapi.com/api/";
  public CHARACTERSURL:string = `${this.BREAKINGBADURL}characters`;
  constructor(private httpClient : HttpClient ) {}

  public getAllCharacters() {
    return this.httpClient.get(this.CHARACTERSURL)
  }
  public getCharacter= (idCharacter: any) => {
    return this.httpClient.get(`${this.CHARACTERSURL}/${idCharacter}`)
  }
}
