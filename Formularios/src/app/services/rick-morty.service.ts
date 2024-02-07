import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters, Episodes, Character, Episode } from '../../interface/allCharacters.interface';;

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(public http: HttpClient) { }

  getCharacters(url: string): Observable<Characters> {
    return this.http.get<Characters>(url);
  }

  getCharacter(url: string): Observable<Episode> {
    return this.http.get<Episode>(url);
  }

  getEpisodes(url: string): Observable<Episodes> {
    return this.http.get<Episodes>(url);
  }

  getEpisode(url: string): Observable<Character> {
    return this.http.get<Character>(url);
  }

}
