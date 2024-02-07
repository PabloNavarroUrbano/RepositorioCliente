import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { EnunciadoComponent } from './views/enunciado/enunciado.component';
import { Ejercicio1Component } from './views/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './views/ejercicio2/ejercicio2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, EnunciadoComponent, Ejercicio1Component, Ejercicio2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
