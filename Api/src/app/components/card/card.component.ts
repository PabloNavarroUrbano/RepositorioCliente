import { NgStyle } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = "My Title";
  @Input() photo: string = "My Photo";
  @Output() openModal = new EventEmitter<string>();

  public open() : void {
    this.openModal.emit('modal show-modal');
  }
  
}
