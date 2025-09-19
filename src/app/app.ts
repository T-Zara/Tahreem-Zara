import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';
import { ThemeService } from './services/theme-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  theme: string = 'theme-light';
  constructor(private themeService: ThemeService) {
     this.themeService.theme$.subscribe(theme => this.theme = theme);
}
  protected readonly title = signal('zaras-portfolio');
}
