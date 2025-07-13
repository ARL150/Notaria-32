import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselService } from '../../services/carousel';
import { Slide } from '../../models/slide.model';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.html',
  styleUrls: ['./carrusel.css']
})
export class CarruselComponent implements OnInit {
  slides: Slide[] = [];
  currentIndex = 0;

  constructor(private carouselService: CarouselService) {}

  ngOnInit() {
    this.slides = this.carouselService.getSlides();

    this.carouselService.currentIndex$.subscribe(index => {
      this.currentIndex = index;
    });
  }

  goToSlide(index: number) {
    this.carouselService.goToSlide(index);
  }

  nextSlide() {
    const next = (this.currentIndex + 1) % this.slides.length;
    this.carouselService.goToSlide(next);
  }

  prevSlide() {
    const prev = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.carouselService.goToSlide(prev);
  }
}
