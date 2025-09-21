import { Component, ElementRef, ViewChild } from '@angular/core';

interface Project {
    title: string;
    description: string;
    tech: string[];
    image?: string;
  }
  
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})

export class Projects {

    @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

    scroll(direction: 'left' | 'right') {
      const container = this.scrollContainer.nativeElement;
      const scrollAmount = 300; // adjust based on card width

      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  
projects: Project[] = [
    {
      title: 'Table-star App',
      description: `Built with Ionic Angular. I worked on creating a Figma-like UI, 
      added native functionalities (location, notifications, camera), 
      and integrated Firebase.`,
      tech: ['Ionic', 'Angular', 'Firebase'],
      image: '../public/tablestar/tablestar02-2.jpg'
    },
    {
      title: 'Efficiency App',
      description: `A healthcare app for doctors to track patient records, 
      filter charts by age/gender/date, and download/save PDFs. 
      Integrated a chatbot for enhanced user experience.`,
      tech: ['Angular', 'Chatbot', 'PDF Export']
    },
    {
      title: 'Breast Cancer Detection',
      description: `Trained a CNN-based model using U-Net with ResNet encoder 
      for segmentation and DenseNet for classification of histopathology images.`,
      tech: ['Deep Learning', 'PyTorch', 'CNN']
    },
    {
      title: 'Health AI',
      description: `A personal project where I’m building a mobile health AI app 
      with Ionic Angular (frontend) and Node.js (backend).`,
      tech: ['Ionic', 'Angular', 'Node.js']
    }
  ];
}
