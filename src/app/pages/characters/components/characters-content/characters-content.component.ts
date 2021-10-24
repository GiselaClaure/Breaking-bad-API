import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from '../../models/character';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-content',
  templateUrl: './characters-content.component.html',
  styleUrls: ['./characters-content.component.scss']
})
export class CharactersContentComponent implements OnInit {
  public charactersList?: CharacterInterface[];

  constructor(public charactersService: CharactersService) { }

 ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe((element: any)=>{
      const apiResults: CharacterInterface[]= element;
      const formattedResults= apiResults.map(({char_id, name, nickname, occupation, status, img, portrayed})=>({
        char_id,
        name,
        nickname,
        occupation,
        status,
        img ,
        portrayed,
      }));
      this.charactersList = formattedResults;
      console.log(this.charactersList);
    })
  } 

}
