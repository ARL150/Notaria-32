import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  direccion = 'Av. Adolfo López Mateos Ote. #1001 Piso 2 Despacho 212. Plaza Cristal. 20250 Aguascalientes, México';
  telefonoFijo = '449 918 0727';
  whatsapp = '449 173 8984';
  correo = 'notaria32ags@hotmail.com';
  facebookUrl = 'https://www.facebook.com/Notaria32Ags/?locale=es_LA';
  instagramUrl = 'https://www.instagram.com/notaria32ags/';


}
