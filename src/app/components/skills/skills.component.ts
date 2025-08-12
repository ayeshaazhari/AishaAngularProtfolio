import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  frontendSkills: Skill[] = [];
  backendSkills: Skill[] = [];
  databaseSkills: Skill[] = [];
  toolsSkills: Skill[] = [];
  allSkills: Skill[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {

    this.portfolioService.getSkills().subscribe(skills => {
      this.allSkills = skills;
    });
    
    this.portfolioService.getSkillsByCategory('frontend').subscribe(skills => {
      this.frontendSkills = skills;
    });

    this.portfolioService.getSkillsByCategory('backend').subscribe(skills => {
      this.backendSkills = skills;
    });

    this.portfolioService.getSkillsByCategory('database').subscribe(skills => {
      this.databaseSkills = skills;
    });

    this.portfolioService.getSkillsByCategory('tools').subscribe(skills => {
      this.toolsSkills = skills;
    });
  }
}