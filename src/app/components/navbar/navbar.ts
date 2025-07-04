import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  burgerActive = false;

  toggleBurger() {
    this.burgerActive = !this.burgerActive;
  }

  closeBurger() {
    this.burgerActive = false;
  }

  // Cerrar menú si se da click fuera
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedInside = (event.target as HTMLElement).closest('.navbar-burger-container');
    if (!clickedInside) {
      this.closeBurger();
    }
  }
}
