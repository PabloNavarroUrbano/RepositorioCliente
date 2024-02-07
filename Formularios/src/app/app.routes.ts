import { Routes } from '@angular/router';
import { EnunciadoComponent } from './views/enunciado/enunciado.component';
import { Ejercicio1Component } from './views/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './views/ejercicio2/ejercicio2.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Enunciado', pathMatch: 'full' },
    { path: 'Enunciado', component: EnunciadoComponent },
    { path: 'Ejercicio1', component: Ejercicio1Component },
    { path: 'Ejercicio2', component: Ejercicio2Component },
];
