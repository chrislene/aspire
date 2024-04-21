import { Component, Input } from '@angular/core';
import { Cards } from '../../interfaces/cards.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-actions.component.html',
  styleUrl: './card-actions.component.scss',
})
export class CardActionsComponent {
  @Input() card!: Cards;
}
