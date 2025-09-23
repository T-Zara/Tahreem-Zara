import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
interests: Array<string> = [
  'Machine Learning',
  'Artificial Intelligence',
  'Ionic Development',
  'Creative Animations',
  'Research & Innovation',
  'Angular Framework',
]

strengths: Array<string> = [
  'Problem-Solving in AI/ML',
  'Creative UI/UX Design',
  'Ionic & Angular Expertise',
  'Bringing Ideas to Life with Animations',
  'Research-Oriented Mindset',
  'Adaptability & Quick Learning',
]

hobbies: Array<string> = [
  'Coding & Building Side Projects',
  'Learning New Tech Skills',
  'Reading & Researching',
  'Designing & Creativity',
  'Working Out to Stay Energized',
]


}
