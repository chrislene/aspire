import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardMask',
  standalone: true,
  pure: true,
})
export class CardMaskPipe implements PipeTransform {
  transform(plainCreditCard: string): string {
    const visibleDigits = 4;
    let maskedSection = plainCreditCard.slice(0, -visibleDigits);
    let visibleSection = plainCreditCard.slice(-visibleDigits);

    // Replace each character in maskedSection with a bullet disc
    maskedSection = maskedSection.replace(/./g, '•');

    // Insert space after every four characters
    maskedSection = maskedSection.replace(/(.{4})/g, '$1 ');

    // Concatenate the masked section with the visible section
    return maskedSection + visibleSection;
  }
}
