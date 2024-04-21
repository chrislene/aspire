import { Injectable } from '@angular/core';
import { Cards } from '../interfaces/cards.interface';
import { generateExpiryDate, getRandomNumber } from '../utils/cards.util';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  public cardList: Cards[] = [
    {
      name: 'Mark',
      isFreeze: false,
      showCardNumber: false,
      cardNumber: getRandomNumber(16),
      expiryDate: generateExpiryDate(),
    },
    {
      name: 'Mathew vaz',
      isFreeze: false,
      showCardNumber: false,
      cardNumber: getRandomNumber(16),
      expiryDate: generateExpiryDate(),
    },
  ];
  constructor() {}
}
