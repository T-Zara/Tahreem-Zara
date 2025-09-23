import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { ThemeService } from '../../services/theme-service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  
  isActive: string = 'home';
  theme: string = 'theme-light';

constructor(private router: Router, private themeService: ThemeService, private cdr: ChangeDetectorRef) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      this.isActive = event.urlAfterRedirects.replace('/', '') || 'home';
    });

     this.themeService.theme$.subscribe(theme => this.theme = theme);
}

ngOnInit() {
 this.cdr.detectChanges();
}

navigate(route: string){
  this.router.navigateByUrl(route);
}

}
