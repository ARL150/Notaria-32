import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
faqs = [
    {
      pregunta: '¿Qué documentos necesito para un trámite de compraventa?',
      respuesta: 'Necesitas identificación oficial, comprobante de domicilio, escrituras previas y CURP. También puede variar según el caso.',
      abierta: false
    },
    {
      pregunta: '¿Puedo realizar un testamento sin testigos?',
      respuesta: 'Sí, en México existe el testamento público abierto que se realiza directamente ante notario sin testigos.',
      abierta: false
    },
    {
      pregunta: '¿Cuánto tarda un trámite notarial?',
      respuesta: 'Depende del tipo de trámite, pero generalmente entre 3 y 10 días hábiles.',
      abierta: false
    }
  ];

toggleFaq(index: number) {
  console.log('Click en la pregunta:', index);
  this.faqs[index].abierta = !this.faqs[index].abierta;
}

}