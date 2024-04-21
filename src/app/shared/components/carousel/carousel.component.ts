import {
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  viewChild,
} from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @ContentChildren(CarouselItemComponent)
  public _carouselItems!: QueryList<CarouselItemComponent>;
  @ViewChild('carousel_container', { static: true })
  public carousel_container!: ElementRef;
  @Input() activeIndex = 0;

  changeSlide(index: number) {
    this.activeIndex = index;
    const pos = index * 100;
    this.carousel_container.nativeElement.style.transform = `translateX(-${pos}%)`;
  }
}
