import { Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  
@ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
 ngAfterViewInit(): void {
    const options = {
      strings: [
        'Hi, I am Tahreem Zara',
        'A Passionate Angular and Ionic Developer',
        'AI Researcher and Enthusiast',
        'Python Enthusiast',
        'Deep Learning Practitioner'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true
    };

    new Typed(this.typedElement.nativeElement, options);
  }

}
