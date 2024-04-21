import { Component, Input } from '@angular/core';
import { CardMaskPipe } from '../../pipes/mask-card.pipe';
import { CommonModule } from '@angular/common';
import { Cards } from '../../interfaces/cards.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardMaskPipe, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card!: Cards;
}
