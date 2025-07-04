import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Servicios } from './components/servicios/servicios';
import { Inicio } from './components/inicio/inicio';
import { Blog } from './components/blog/blog';
import { ContactoRedes } from './components/contacto-redes/contacto-redes';
import { Ubicacion } from './components/ubicacion/ubicacion';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'servicios', component: Servicios },
    { path: 'nosotros', component: Inicio },
    { path: 'blog', component: Blog },
    { path: 'contacto', component: ContactoRedes },
    { path: 'ubicacion', component: Ubicacion },

];
