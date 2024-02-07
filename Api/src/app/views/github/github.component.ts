import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Item } from '../../interface/github.interface';



@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent {

  public constructor(public service: GithubService) { }

  public users: Item[] = [];

  public getResponse(): void {
    this.service.getResponse().subscribe((response) => {
      this.users = response.items;
    });
  }
}
