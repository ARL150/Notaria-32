import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { CarruselComponent } from './components/carrusel/carrusel';
import { Ubicacion } from './components/ubicacion/ubicacion';
import { WhatsappButton } from './components/whatsapp-button/whatsapp-button';
import { SobreNosotros } from './components/sobre-nosotros/sobre-nosotros';
import { Notario } from './components/notario/notario';
import { Faq } from './components/faq/faq';
import { Servicios } from './components/servicios/servicios';
import { ContactoRedes } from './components/contacto-redes/contacto-redes';
import { Inicio } from './components/inicio/inicio';
import { Horarios } from './components/horarios/horarios';
import { Pagos } from './components/pagos/pagos';
import { Blog } from './components/blog/blog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CarruselComponent, Ubicacion, WhatsappButton, SobreNosotros, Notario, Faq, Servicios, 
    ContactoRedes, Inicio, Horarios, Pagos, Blog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Notaria32';
}
