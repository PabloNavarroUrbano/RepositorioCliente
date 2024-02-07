import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GithubComponent } from './views/github/github.component';
import { GithubTwoComponent } from './views/github-two/github-two.component';
import { MemigoComponent } from './views/memigo/memigo.component';
import { MemigoTwoComponent } from './views/memigo-two/memigo-two.component';
import { MemigoThreeComponent } from './views/memigo-three/memigo-three.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, GithubComponent, GithubTwoComponent, MemigoComponent, MemigoTwoComponent, MemigoThreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
