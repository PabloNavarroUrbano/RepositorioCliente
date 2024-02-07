import { Component } from '@angular/core';
import { GithubTwoService } from '../../services/github-two.service';
import { Item } from '../../interface/github-two.interface';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-github-two',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './github-two.component.html',
  styleUrl: './github-two.component.css'
})
export class GithubTwoComponent {
  public constructor(public service: GithubTwoService) { }

  public users: Item[] = [];

  public className : string = 'modal';
  public modalName : string = '';
  public photoName : string = '';


  public ngOnInit(): void {
    this.service.getResponse().subscribe((response) => {
      this.users = response.items;
    });
  }

  public onClick(profile: number): void {
    this.modalName = this.users[profile].login;
    this.photoName = `url(${this.users[profile].avatar_url})`;
    this.className = 'modal show-modal';
  }

  public onCloseModal(className : string) : void {
    this.className = className;
  }



}
