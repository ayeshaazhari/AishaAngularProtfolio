import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Aisha -  MEAN Stack Developer Portfolio');
    
    this.meta.addTags([
      { name: 'description', content: 'MEAN Stack Developer with 3+ years experience. Specialized in Angular, Node.js, Express.js, and MongoDB.' },
      { name: 'keywords', content: 'MEAN Stack, Angular, Node.js, Express.js, MongoDB, Full Stack Developer' },
      { name: 'author', content: 'Aisha Siddika' },
      { property: 'og:title', content: 'Aisha Siddika - MEAN Stack Developer' },
      { property: 'og:description', content: 'Professional portfolio showcasing MEAN stack development expertise' },
      { property: 'og:type', content: 'website' }
    ]);
  }
}
