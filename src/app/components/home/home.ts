import { Component } from '@angular/core';
import { Inicio } from '../inicio/inicio';
import { Blog } from '../blog/blog';
import { ContactoRedes } from '../contacto-redes/contacto-redes';
import { Ubicacion } from '../ubicacion/ubicacion';
import { Horarios } from '../horarios/horarios';
import { Notario } from '../notario/notario';
import { Faq } from '../faq/faq';
import { Pagos } from '../pagos/pagos';
import { CarruselComponent } from '../carrusel/carrusel';
import { Servicios } from '../servicios/servicios';

@Component({
  selector: 'app-home', 
  standalone: true,
  imports: [Inicio, Blog, ContactoRedes, Ubicacion, Horarios, Notario, Faq, Pagos, CarruselComponent, Servicios],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
