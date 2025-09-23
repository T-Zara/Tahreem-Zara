import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project';

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

    projects: any = [];
  constructor(private router: Router, private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  } 
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

  viewProject(title: string) {
    this.router.navigate(['/project-details'], { queryParams: { title } });
  }
}
