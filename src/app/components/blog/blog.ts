import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Articulo {
  id: number;
  titulo: string;
  resumen: string;
  contenido: string;
}

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
    standalone: true,
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

  articulos: Articulo[] = [
    {
      id: 1,
      titulo: '¿Por qué es importante hacer tu testamento?',
      resumen: 'Descubre cómo un testamento puede proteger a tus seres queridos y garantizar que tus bienes se distribuyan según tu voluntad.',
      contenido: 'Un testamento es un documento legal que permite organizar y distribuir tus bienes de manera clara y segura. Al hacerlo, proteges a tus seres queridos y evitas conflictos legales futuros. Además, garantiza que tus deseos se respeten conforme a la ley.'
    },
    {
      id: 2,
      titulo: 'Ventajas legales de un testamento notarial',
      resumen: 'Conoce las garantías legales que ofrece un testamento elaborado ante notario y cómo evitar problemas futuros.',
      contenido: 'El testamento notarial brinda certeza jurídica y seguridad, ya que es elaborado ante un notario público. Esto asegura que el documento cumple con todos los requisitos legales, evitando fraudes o disputas entre herederos.'
    },
    {
      id: 3,
      titulo: 'Errores comunes al hacer un testamento',
      resumen: 'Evita los errores más frecuentes al preparar tu testamento para asegurar que sea válido y respetado.',
      contenido: 'Algunos errores frecuentes incluyen no actualizar el testamento, no especificar claramente los bienes o no contar con asesoría legal. Estos errores pueden invalidar el testamento o generar problemas entre los beneficiarios.'
    },
    {
      id: 4,
      titulo: 'Poderes notariales: qué son y para qué sirven',
      resumen: 'Aprende cómo un poder notarial puede facilitar trámites legales y representar tus intereses.',
      contenido: 'Un poder notarial es un documento que autoriza a otra persona a actuar en tu nombre para ciertos actos legales o administrativos. Es útil cuando no puedes acudir personalmente o deseas delegar ciertas responsabilidades.'
    },
    {
      id: 5,
      titulo: 'Tipos de poderes notariales y sus usos',
      resumen: 'Conoce los diferentes tipos de poderes notariales y cuál se adapta mejor a tus necesidades.',
      contenido: 'Existen poderes generales, especiales, y otros específicos como para venta de bienes o representación legal. Cada tipo tiene usos y alcances distintos que debes conocer para elegir el adecuado.'
    },
    {
      id: 6,
      titulo: 'Cómo certificar documentos ante notario',
      resumen: 'Pasos para validar tus documentos mediante certificaciones notariales.',
      contenido: 'La certificación notarial garantiza la autenticidad de documentos, firmas y actos. Conocer el proceso y requisitos te ayudará a evitar fraudes y facilitar trámites oficiales.'
    },
    {
      id: 7,
      titulo: 'Actas notariales: qué son y cuándo solicitarlas',
      resumen: 'Importancia de las actas notariales para dar fe de hechos relevantes.',
      contenido: 'Las actas notariales son documentos que describen hechos o circunstancias con valor legal. Se usan para dejar constancia en situaciones que requieren prueba o certificación.'
    },
    {
      id: 8,
      titulo: 'Herencias y sucesiones: pasos básicos',
      resumen: 'Entiende el proceso legal para la transmisión de bienes tras un fallecimiento.',
      contenido: 'La sucesión puede ser testamentaria o intestada. Conocer los pasos legales y requisitos te permitirá realizar el trámite de forma eficiente y respetando los derechos de los herederos.'
    },
    {
      id: 9,
      titulo: 'Cómo evitar conflictos familiares con un buen testamento',
      resumen: 'Consejos para que tu testamento sea claro y prevenga disputas entre familiares.',
      contenido: 'Un testamento bien redactado y actualizado reduce riesgos de pleitos legales, garantiza que tus deseos sean respetados y aporta tranquilidad a tus seres queridos.'
    },
    {
      id: 10,
      titulo: 'Requisitos para validar un testamento ante notario',
      resumen: 'Lo que debes saber para que tu testamento sea válido y legalmente vinculante.',
      contenido: 'Cumplir con los requisitos legales y formales establecidos por la ley es fundamental para que el testamento tenga plena validez y pueda ejecutarse sin problemas.'
    },
    {
      id: 11,
      titulo: 'Importancia de las escrituras públicas',
      resumen: 'Qué son y por qué es vital formalizar ciertos actos mediante escrituras públicas notariales.',
      contenido: 'Las escrituras públicas son documentos autorizados por notario que otorgan certeza jurídica a contratos y actos, como compra-venta de inmuebles, constitución de sociedades, entre otros.'
    }
  ];

  articuloSeleccionado: Articulo | null = null;

  seleccionarArticulo(id: number) {
    this.articuloSeleccionado = this.articulos.find(a => a.id === id) || null;
  }

  volverLista() {
    this.articuloSeleccionado = null;
  }
}