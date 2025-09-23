import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(private router: Router) {}
@ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
 ngAfterViewInit(): void {
    const options = {
      strings: [
        'Passionate about creating beautiful, functional digital experiences. Specialized in React, Node.js, and modern web technologies.',
      ],
      typeSpeed: 10,
      backSpeed: 80,
      backDelay: 15000,
      loop: false
    };

    new Typed(this.typedElement.nativeElement, options);
  }
  navigate(route: string){
    this.router.navigateByUrl(route);
  }
}
