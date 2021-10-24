import { Component, OnInit } from '@angular/core';
import { EpisodesModel } from '../../models/episodes.models';
import { EpisodesService } from '../../services/episodes.service';

@Component({
  selector: 'app-episodes-content',
  templateUrl: './episodes-content.component.html',
  styleUrls: ['./episodes-content.component.scss']
})
export class EpisodesContentComponent implements OnInit {
public episodesList?: EpisodesModel[];
  constructor(private episodesService: EpisodesService) { }

  ngOnInit(): void {
    this.episodesService.getAllEpisodes().subscribe((element: any)=>{
      const apiResults: EpisodesModel[]= element;
      const formattedResults= apiResults.map(({episode_id, title, season , air_date})=>({
        episode_id,
        title,
        season,
        air_date,
      }));
      this.episodesList = formattedResults;
      console.log(this.episodesList);
    })
  } 
  }
