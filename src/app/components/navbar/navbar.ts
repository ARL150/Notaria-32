import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  burgerActive = false;

  toggleBurger() {
    this.burgerActive = !this.burgerActive;
  }

  closeBurger() {
    this.burgerActive = false;
  }

  // Escucha clics fuera del menú para cerrarlo
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedInside = (event.target as HTMLElement).closest('.custom-navbar, .mobile-menu');
    if (!clickedInside) {
      this.closeBurger();
    }
  }
}
