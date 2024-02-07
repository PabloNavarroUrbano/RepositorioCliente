import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../interface/github-two.interface';


@Injectable({
  providedIn: 'root'
})
export class GithubTwoService {

  constructor(public http: HttpClient) { }

  public getResponse():Observable<Response>{
    return this.http.get<Response>('https://api.github.com/search/users?q=angular');
    }
}
