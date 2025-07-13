import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { Slide } from '../models/slide.model';
import { SLIDES } from '../data/slides.data';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private slides: Slide[] = SLIDES;

  private currentIndexSubject = new BehaviorSubject<number>(0);
  currentIndex$: Observable<number> = this.currentIndexSubject.asObservable();

  constructor() {
    // Cambiar imagen automáticamente cada 2 segundos
    interval(2000).subscribe(() => {
      const nextIndex = (this.currentIndexSubject.value + 1) % this.slides.length;
      this.currentIndexSubject.next(nextIndex);
    });
  }

  getSlides(): Slide[] {
    return this.slides;
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.slides.length) {
      this.currentIndexSubject.next(index);
    }
  }
}
