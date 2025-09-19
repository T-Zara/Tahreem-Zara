import { ChangeDetectorRef, Component } from '@angular/core';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  theme: string = 'theme-light';

  constructor( private themeService: ThemeService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.theme = this.themeService.getTheme();
    }

 toggleTheme() {
  this.theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light';
  this.themeService.setTheme(this.theme);
   this.cdr.detectChanges();
}   
}
