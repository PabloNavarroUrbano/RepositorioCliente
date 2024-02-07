import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../interface/memigo.interface';

@Injectable({
  providedIn: 'root'
})
export class MemigoService {

  constructor(public http: HttpClient) { }

  public getResponse():Observable<Response>{
    return this.http.get<Response>('https://api.imgflip.com/get_memes');
    }
    
}
