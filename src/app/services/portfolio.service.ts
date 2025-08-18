import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {  Experience,  } from '../models/experience';
import { Project } from '../models/project';
import {  Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  private projects: Project[] = [
    {
      id: 1,
      title: 'Lit or Unlit - Content Rating Platform',
      description: 'Built comprehensive rating system for products, services, and social media content with advanced ranking algorithms.Implemented real-time data synchronization and responsive UI using Angular and Bootstrap',
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bootstrap'],
      image: 'assets/images/ecommerce-project.jpg',
      demoUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/username/ecommerce-app',
      features: [
        'User Authentication & Authorization',
        'Role-based access control',
        'Content Search & Filters',
        'Admin Panel',
        'Rating '
      ],
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'BuildBoss - Bid Management System',
      description: 'Developed multi-tier user access system with role-based permissions and payment integration Created contractor invitation and bidding workflow with automated notifications.',
      technologies: ['Angular', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js'],
      image: 'assets/images/chat-app.jpg',
      demoUrl: 'https://demo-chat.com',
      githubUrl: 'https://github.com/username/chat-app',
      features: [
        'Real-time messaging with Socket.io',
        'Private and group conversations',
        'File and image sharing',
        'Online status indicators',
        'Message history persistence',
        'Responsive design'
      ],
      category: 'fullstack'
    },
    {
      id: 3,
      title: 'BodyLove - Fitness & Nutrition Platform',
      description: 'Built subscription-based learning platform with instructor-student interaction features Implemented community features and lesson management system with secure user authentication',
      technologies: ['Angular', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js'],
      image: 'assets/images/chat-app.jpg',
      demoUrl: 'https://demo-chat.com',
      githubUrl: 'https://github.com/username/chat-app',
      features: [
        'Closed Network Application',
        'Community Support',
        'File and image sharing',
        'Online status indicators',
        'Stripe Payment gateway subscribtion',
        'Responsive design'
      ],
      category: 'fullstack'
    },

    {
      id: 4,
      title: 'LMA',
      description: 'An app to create a platform where consumer can avail services like plumbing, electrician, cleaning at last minute also by availing services with nearest local businesses.Toplisting feature with payment.',
      technologies: ['Angular', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js'],
      image: 'assets/images/chat-app.jpg',
      demoUrl: 'https://demo-chat.com',
      githubUrl: 'https://github.com/username/chat-app',
      features: [
        'Geo location Search',
        'Top listed Services',
        'Service availibility calendar'
      ],
      category: 'fullstack'
    },

    {
      id: 5,
      title: 'Smile',
      description: 'Smile is Interview Scheduling Android and IOS APP, where Dental hospital can post Jobs , view dental professional resume,schedule interview and hire. It also has rating feature.',
      technologies: ['Angular', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js'],
      image: 'assets/images/chat-app.jpg',
      demoUrl: 'https://demo-chat.com',
      githubUrl: 'https://github.com/username/chat-app',
      features: [
        'OAuth Login',
        'Email notification',
        'File uploading to AWS S3',
        'Interview Scheduling',
        'Admin Panel with analytics',
        'Responsive design'
      ],
      category: 'fullstack'
    },
    {
      id: 6,
      title: 'MAXION',
      description: 'MAXION is Dating Android and IOS APP , where users can create profiles , search matches, create dates, book hotels, chat , report and block. Admin approves the user account , suggests date Idea, Delete users.',
      technologies: ['Angular', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js'],
      image: 'assets/images/chat-app.jpg',
      demoUrl: 'https://demo-chat.com',
      githubUrl: 'https://github.com/username/chat-app',
      features: [
        'Search Alogorithm based on location,hobbies, interests etc',
        'Real-time messaging with Socket.io',
        'Private and group conversations',
        'Online status indicators',
        'Message history persistence',
        'Responsive design',
        'OAuth login'
      ],
      category: 'fullstack'
    },
   
  ];
   // {
    //   id: 3,
    //   title: 'Task Management Dashboard',
    //   description: 'Project management tool with Kanban boards, team collaboration, and progress tracking.',
    //   technologies: ['Angular', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    //   image: 'assets/images/task-management.jpg',
    //   demoUrl: 'https://demo-taskmanager.com',
    //   githubUrl: 'https://github.com/username/task-manager',
    //   features: [
    //     'Kanban board interface',
    //     'Team collaboration tools',
    //     'Progress tracking & analytics',
    //     'Role-based access control',
    //     'File attachments',
    //     'Email notifications'
    //   ],
    //   category: 'fullstack'
    // }

  private experiences: Experience[] = [
    {
      id: 1,
      company: 'Infosys (Payroll- Collabera)',
      position: 'MEAN Stack Developer',
      duration: 'Jan 2024 - March 2025',
      location: 'Hyderabad',
      description: [
        'Designed and implemented flexible Angular models using Appkit 4 design system for PwC branded applications.',
        'Developed comprehensive unit tests using Jest framework, achieving 85%+ code coverage.',
        'Built accessible, responsive web applications following WCAG guidelines and best practices.',
        'Collaborated with cross-functional teams in agile environment to deliver high-quality software solutions Optimized application performance and implemented PWA features for enhanced user experience.',
      ],
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB','Appkit','Grafana', 'Jest','Git']
    },
    {
      id: 2,
      company: 'Zazz',
      position: 'MEAN Stack Developer',
      duration: 'Dec 2022 - Oct 2023',
      location: 'Hyderabad',
      description: [
        'Developed RESTful APIs using Node.js and Express.js.',
        'Implemented secure authentication systems including JWT,basic Auth, AWS Secret Manager integration.',
        'Integrated Stripe payment gateway for subscription management and transaction processing. Created customers, connected accounts,charges, transfer and payouts.',
        'Built scalable backend architecture using MongoDB with optimized database queries.',
        'Developed mobile applications for Android and iOS platforms with cross-platform compatibility.'
      ],
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Mocha - Chai', 'Git', 'AWS secret manager' , 'Basic auth' , 'Stripe']
    },
    {
      id: 3,
      company: 'Zibtek',
      position: 'Software Developer',
      duration: 'Feb 2020 - Nov 2022',
      location: 'Banglore',
      description: [

        'Developed scalable Single Page Applications (SPAs) using Angular and responsive design principles.',
        'Implemented template-driven and reactive forms with custom validations and error handling.',
        'Integrated RxJS for reactive programming and efficient asynchronous data stream management Utilized NgRx for state management in complex applications with multiple components.',
        'Configured AWS S3 bucket integration using Multer for secure file storage and retrieval. Maintained comprehensive.',
        'documentation and presented project updates to stakeholders.',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Participated in daily standups and sprint retrospectives',
      ],
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Multer', 'Wordpress']
    }
  ];

  private skills: Skill[] = [
    // Frontend
    { name: 'Angular', level: 90, category: 'frontend', icon: 'bi-angular', image:"../../../assets/angular.png" },
    { name: 'TypeScript', level: 85, category: 'frontend', icon: 'bi-code-slash',image:"../../../assets/typescript1.png" },
    { name: 'JavaScript', level: 90, category: 'frontend', icon: 'bi-javascript' ,image:"../../../assets/jsIcon.webp"},
    { name: 'HTML5', level: 95, category: 'frontend', icon: 'bi-html5' ,image:"../../../assets/html1.png"},
    { name: 'CSS3/SCSS', level: 90, category: 'frontend', icon: 'bi-css3' ,image:"../../../assets/css1.png"},
    { name: 'Bootstrap', level: 85, category: 'frontend', icon: 'bi-bootstrap' ,image:"../../../assets/bootstrap1.png"},
    { name: 'RxJS', level: 80, category: 'frontend', icon: 'bi-arrow-repeat' ,image:"../../../assets/rxjs.jpeg"},

    // Backend
    { name: 'Node.js', level: 85, category: 'backend', icon: 'bi-server', image:"../../../assets/node.png" },
    { name: 'Express.js', level: 85, category: 'backend', icon: 'bi-gear' ,image:"../../../assets/express.png"},
    { name: 'RESTful APIs', level: 90, category: 'backend', icon: 'bi-api' ,image:"../../../assets/restapi.png"},
    { name: 'JWT Authentication', level: 80, category: 'backend', icon: 'bi-shield-check' ,image:"../../../assets/jwt2.png"},
    { name: 'Socket.io', level: 75, category: 'backend', icon: 'bi-chat-dots' ,image:"../../../assets/socket1.png"},

    // Database
    { name: 'MongoDB', level: 85, category: 'database', icon: 'bi-database',image:"../../../assets/mongodb.png" },
    { name: 'Mongoose', level: 80, category: 'database', icon: 'bi-diagram-3' ,image:"../../../assets/mongoose.png"},

    // Tools
    { name: 'Git/GitHub', level: 90, category: 'tools', icon: 'bi-git' ,image:"../../../assets/github.png"},
    { name: 'Mocha-Chai', level: 65, category: 'tools', icon: 'bi-cloud',image:"../../../assets/mochachai.jpeg" },
    { name: 'Jest', level: 75, category: 'tools', icon: 'bi-check-circle',image:"../../../assets/jest.png" },
    { name: 'Postman', level: 85, category: 'tools', icon: 'bi-send',image:"../../../assets/postman.png" },
    { name: 'Swagger', level: 85, category: 'tools', icon: 'bi-send',image:"../../../assets/swagger.png" },
    { name: 'CI/CD', level: 85, category: 'tools', icon: 'bi-send',image:"../../../assets/cicd.jpeg" }


  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }

  getSkillsByCategory(category: string): Observable<Skill[]> {
    return of(this.skills.filter(skill => skill.category === category));
  }
}