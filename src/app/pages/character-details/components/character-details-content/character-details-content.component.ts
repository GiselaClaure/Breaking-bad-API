import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/pages/characters/services/characters.service';

@Component({
  selector: 'app-character-details-content',
  templateUrl: './character-details-content.component.html',
  styleUrls: ['./character-details-content.component.scss']
})
export class CharacterDetailsContentComponent implements OnInit {
  public character: any;
  public characterOccupation: any;
  constructor(private route: ActivatedRoute, public charactersService: CharactersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idCharacter= params.get("idCharacter");

      this.charactersService
      .getCharacter(idCharacter)
      .subscribe((CharacterData) => {
        console.log(CharacterData);
          this.character = CharacterData;
          console.log("personaje", this.character)
      })
    })
    
  }

}
