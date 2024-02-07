import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RickMortyService } from '../../services/rick-morty.service';
import { Character, Characters, Episodes, Episode } from '../../../interface/allCharacters.interface';


@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {

  public constructor(public service: RickMortyService) {}

  public term: string = '';
  public characters: Character[] = [];
  public episodes: Episode[] = [];

  public case : string = 'one';

  public infoRicky = new FormGroup({
    type: new FormControl('', { nonNullable: true }),
    name: new FormControl('', { nonNullable: true }),
  });

  public getCharacter(search: string): void {
    this.service.getCharacters(search).subscribe((response) => {
      response.results.map((item) => {
        item.episode.map((element) => {
          this.service.getCharacter(element).subscribe((response) => {
            this.episodes.push(response);
          });
        });
      });
    });
  }

  public getEpisode(search: string): void {
    this.service.getEpisodes(search).subscribe((response) => {
      response.results.map((item) => {
        item.characters.map((element) => {
          this.service.getEpisode(element).subscribe((response) => {
            this.characters.push(response);
          });
        });
      });
    });
  }

  public submit() : void {
    if(this.infoRicky.value.type === 'capitulo'){
      this.case = 'two';
      this.term = this.infoRicky.getRawValue().name;
      this.getCharacter('https://rickandmortyapi.com/api/character/?name=' + this.infoRicky.getRawValue().name);
    }else{
      this.case = 'three';
      this.term = this.infoRicky.getRawValue().name;
      this.getEpisode('https://rickandmortyapi.com/api/episode/?name=' + this.infoRicky.getRawValue().name);
    }
  }

  
    
}
