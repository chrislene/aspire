import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SIDE_NAV_LIST } from './shared/constants/side-nav.constant';
import { CommonModule } from '@angular/common';
import { CardComponent } from './shared/components/card/card.component';
import { CardActionsComponent } from './shared/components/card-actions/card-actions.component';
import { TransactionsComponent } from './shared/components/transactions/transactions.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'aspire-assignment';
  public sideNavList = SIDE_NAV_LIST;
}
