import { Component } from '@angular/core';
import { MemigoService } from '../../services/memigo.service';
import { Meme } from '../../interface/memigo.interface';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-memigo-two',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './memigo-two.component.html',
  styleUrl: './memigo-two.component.css'
})
export class MemigoTwoComponent {
  public constructor(public service: MemigoService) {}

  public data: Meme[] = [];

  public title: string = '';
  public photo: string = '';
  public contador: number = 0;

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
  
  
}
