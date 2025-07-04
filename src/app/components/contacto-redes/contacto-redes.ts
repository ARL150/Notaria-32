import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto-redes',
  imports: [], 
  standalone: true,
  templateUrl: './contacto-redes.html',
  styleUrl: './contacto-redes.css'
})
export class ContactoRedes {
  telefonoFijo = '449 918 0727';
  whatsapp = '449 173 8984';
  correo = 'notaria32ags@hotmail.com';
  facebookUrl = 'https://www.facebook.com/Notaria32Ags/?locale=es_LA';
  instagramUrl = 'https://www.instagram.com/notaria32ags/';

  whatsappLink = '';


  getWhatsappLink() {
    return 'https://wa.me/52' + this.whatsapp.replace(/\s+/g, '');
  }
  getTelefonoLink(): string {
    return 'tel:' + this.telefonoFijo.replace(/\s+/g, '');
  }
}
