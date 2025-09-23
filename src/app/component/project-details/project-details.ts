import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss'
})
export class ProjectDetails {
  title!: string;
  project: any = null;
  constructor(private route: ActivatedRoute, private projectService: ProjectService) {
  
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.title = params['title'];   // access query param
      console.log('Project Title:', this.title);
    });
  this.project = this.projectService.getProjects().find(p => p.title === this.title) || null;
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
  
  
}
