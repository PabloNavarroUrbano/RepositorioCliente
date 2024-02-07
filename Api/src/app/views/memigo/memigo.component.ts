import { Component } from '@angular/core';
import { MemigoService } from '../../services/memigo.service';
import { Meme } from '../../interface/memigo.interface';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-memigo',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './memigo.component.html',
  styleUrl: './memigo.component.css'
})
export class MemigoComponent {
  public constructor(public service: MemigoService) {}

  public data: Meme[] = [];

  public title: string = '';
  public photo: string = '';

  public ngOnInit(): void {
    this.service.getResponse().subscribe((response) => {
      this.data = response.data.memes;
    });
  }
    
}
