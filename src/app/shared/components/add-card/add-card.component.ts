import { Component } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardsService } from '../../services/cards.service';
import { MatButtonModule } from '@angular/material/button';
import { generateExpiryDate, getRandomNumber } from '../../utils/cards.util';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './add-card.component.html',
})
export class AddCardComponent {
  public cardName = new FormControl<string>('', Validators.required);
  constructor(
    private cardService: CardsService,
    public dialogRef: MatDialogRef<AddCardComponent>
  ) {}
  public addCard() {
    if (this.cardName.invalid) return this.cardName.markAllAsTouched();
    this.cardService.cardList = [
      ...this.cardService.cardList,
      {
        name: this.cardName.value as string,
        isFreeze: false,
        showCardNumber: false,
        cardNumber: getRandomNumber(16),
        expiryDate: generateExpiryDate(),
      },
    ];
    console.log(this.cardService.cardList);

    this.dialogRef.close();
  }
}
