import { Component } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CardActionsComponent } from '../shared/components/card-actions/card-actions.component';
import { TransactionsComponent } from '../shared/components/transactions/transactions.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddCardComponent } from '../shared/components/add-card/add-card.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CardsService } from '../shared/services/cards.service';
import { Cards } from '../shared/interfaces/cards.interface';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { CarouselItemComponent } from '../shared/components/carousel/carousel-item/carousel-item.component';

@Component({
  selector: 'app-debit-cards',
  standalone: true,
  imports: [
    CardComponent,
    CardActionsComponent,
    TransactionsComponent,
    MatTabsModule,
    CommonModule,
    MatDialogModule,
    CarouselComponent,
    CarouselItemComponent,
  ],
  templateUrl: './debit-cards.component.html',
  styleUrl: './debit-cards.component.scss',
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', display: 'none' })
      ),
      state('expanded', style({ height: '*' })),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class DebitCardsComponent {
  isExpanded: boolean = true;
  detailsExpand = false;

  constructor(public dialog: MatDialog, public cardService: CardsService) {}
  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public addNewCard() {
    this.dialog.open(AddCardComponent, { width: '400px' });
  }
}
