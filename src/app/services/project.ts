import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

private projects: Array<{ title: string, description: string,   shortDescription: string, tech: string[], image: string, images: string[] }> = [
  {
    title: 'TableStar App',
    description: `Built with Angular, Ionic, and Capacitor. I created the UI from Figma designs 
    and integrated native functionalities (camera, location, QR code scanner, verification, etc.). 
    Implemented the reservation process flow at the front end based on backend state variables. 
    Used NgRx for caching so restaurant data was stored after the first visit, reducing load time 
    for returning users.`,
    shortDescription: `Restaurant app with Figma-based UI, native features, and NgRx caching.`,
    tech: ['Angular', 'Ionic', 'Capacitor', 'NgRx'],
    image: '../public/tablestar/main.png',
    images: ['../public/tablestar/tablestar01.png', '../public/tablestar/tablestar02.png', '../public/tablestar/tablestar03.png', '../public/tablestar/tablestar04.png', '../public/tablestar/tablestar05.png', '../public/tablestar/tablestar06.png', '../public/tablestar/tablestar07.png', '../public/tablestar/tablestar08.png', '../public/tablestar/tablestar09.png', '../public/tablestar/tablestar10.png', '../public/tablestar/tablestar11.png', '../public/tablestar/tablestar12.png', '../public/tablestar/tablestar13.png', '../public/tablestar/tablestar14.png']},
  {
    title: 'Automatic Cancer Detection',
    description: `Master’s thesis project on breast cancer detection using deep CNNs on histopathology images. 
    Implemented multiple CNN architectures and preprocessing techniques, achieving 78% accuracy on 
    3-class classification. Detailed implementation cannot be shared as the paper is unpublished, 
    but result graphs can be shared on request.`,
    shortDescription: `Master’s thesis: Breast cancer detection using CNNs (78% accuracy).`,
    tech: ['Deep Learning', 'CNN', 'PyTorch'],
    image: '../public/cancerDetection/main.png',
    images: [''],

  },
  {
    title: 'Efficiency App',
    description: `A hospital health app for doctors to view and manage multiple patient charts. 
    Created interactive charts from backend data, implemented a favorites system, and designed UIs from Figma. 
    Built a custom chatbot that interacted with patients, auto-generated structured forms based on responses, 
    and allowed multiple form submissions with PDF download functionality. 
    Developed with Angular and Ionic.`,
    shortDescription: `Healthcare app with charts, chatbot, and PDF form generation.`,
    tech: ['Angular', 'Ionic', 'Chatbot', 'PDF Export'],
    image: '../public/efficiencyApp/main.png',
    images: ['../public/efficiencyApp/01.png', '../public/efficiencyApp/02.png', '../public/efficiencyApp/03.png', '../public/efficiencyApp/04.png', '../public/efficiencyApp/06.png', '../public/efficiencyApp/07.png', '../public/efficiencyApp/08.png', '../public/efficiencyApp/09.png', '../public/efficiencyApp/10.png', '../public/efficiencyApp/11.png']
  },
  {
    title: 'HolidayFare',
    description: `A holiday booking app developed with Angular and Ionic. 
    I implemented UIs from Figma designs and built features like search, explore, booking flow, 
    and commenting functionality to enhance user interaction.`,
    shortDescription: `Holiday booking app with search, explore, booking, and comments.`,
    tech: ['Angular', 'Ionic', 'Node.js'],
    image: '../public/holidayFare/main.png',
    images: ['../public/holidayFare/holidayFare01.png', '../public/holidayFare/holidayFare02.png', '../public/holidayFare/holidayFare03.png', '../public/holidayFare/holidayFare04.png', '../public/holidayFare/holidayFare05.png', '../public/holidayFare/holidayFare06.png', '../public/holidayFare/holidayFare07.png', '../public/holidayFare/holidayFare08.png', '../public/holidayFare/holidayFare09.png']
  },
  {
    title: 'Uplove Education',
    description: `An education-focused mobile app developed with Angular and Ionic. 
    I created the UI from Figma designs. Further details cannot be shared as the app 
    has not yet been released.`,
    shortDescription: `Education app with Figma-based UI (details confidential).`,
    tech: ['Angular', 'Ionic', 'Node.js'],
    image: '../public/uploveEducation/main.png',
    images: ['../public/uploveEducation/01.png', '../public/uploveEducation/02.png', '../public/uploveEducation/03.png', '../public/uploveEducation/04.png', '../public/uploveEducation/05.png']
  },
  {
    title: 'Health AI',
    description: `An ongoing personal project — a comprehensive health management app. 
    Planned features include calorie counter, step tracker, blood pressure monitor, 
    AI-powered chatbot for health queries, and a period cycle tracker. 
    Serves as an experimental project to integrate modern health app features with AI.`,
    shortDescription: `Personal health app with AI chatbot, tracking, and monitoring features.`,
    tech: ['Angular', 'Ionic', 'Node.js', 'AI'],
    image: '../public/healthAI/main.png',
    images: ['../public/tablestar/main.png']
  },
  {
    title: 'Portfolio Website',
    description: `This portfolio website, built with Angular and Ionic, showcases my projects 
    and technical skills in a professional and interactive format.`,
    shortDescription: `My portfolio site built with Angular & Ionic.`,
    tech: ['Angular', 'Ionic'],
    image: '../public/portfolio/main.png',
    images: ['../public/tablestar/main.png']
  }
];


  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectByTitle(title: string){
    return this.projects.find(p => p.title === title);
  }
}
