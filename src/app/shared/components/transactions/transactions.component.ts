import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Transactions } from '../../interfaces/transaction.interface';
import { TRANSACTION } from '../../constants/transaction.constant';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent {
  public transaction: Transactions[] = TRANSACTION;

  isExpanded: boolean = true;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
