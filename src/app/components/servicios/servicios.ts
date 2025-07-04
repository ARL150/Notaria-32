import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule],  
  standalone: true,
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class Servicios {
servicios = [
    {
      categoria: 'Derecho Inmobiliario',
      items: [
        'Compra-venta de inmuebles',
        'Traspasos',
        'Donaciones',
        'Constitución de régimen de condominio',
        'Usufructo y nuda propiedad'
      ]
    },
    {
      categoria: 'Actos Personales y Familiares',
      items: [
        'Testamentos',
        'Poderes notariales',
        'Capitulaciones matrimoniales',
        'Revocación de poderes'
      ]
    },
    {
      categoria: 'Actos Mercantiles y Empresariales',
      items: [
        'Constitución de sociedades',
        'Actas de asamblea',
        'Protocolización de contratos',
        'Poderes mercantiles'
      ]
    },
    {
      categoria: 'Otros servicios notariales',
      items: [
        'Certificación de documentos',
        'Fe de hechos',
        'Ratificación de firmas',
        'Asesoría legal'
      ]
    }
  ];
}
