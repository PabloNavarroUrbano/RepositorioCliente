import { Component } from '@angular/core';
import { MemigoService } from '../../services/memigo.service';
import { Meme } from '../../interface/memigo.interface';
import { CardComponent } from '../../components/card/card.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-memigo-three',
  standalone: true,
  imports: [CardComponent, ModalComponent],
  templateUrl: './memigo-three.component.html',
  styleUrl: './memigo-three.component.css'
})
export class MemigoThreeComponent {

  public constructor(public service: MemigoService) {}

  public data: Meme[] = [];

  public title: string = '';
  public photo: string = '';
  public contador: number = 0;

  public className : string = 'modal';
  public modalName : string = '';
  public photoName : string = '';

  public ngOnInit(): void {
    this.service.getResponse().subscribe((response) => {
      this.data = response.data.memes;

    });
  }

  public goBack(): void {
    if (this.contador === 0) {
      this.contador = 100;
    } else {
      this.contador--;
    }
  }

  public goNext(): void {
    if (this.contador === 100) {
      this.contador = 0;
    } else {
      this.contador++;
    }
  }

  public open(data: string): void {
    this.className = data;
    this.modalName = this.data[this.contador].name;
    this.photoName = `url(${this.data[this.contador].url})`;
  }

  public onCloseModal(className : string) : void {
    this.className = className;
  }
}
