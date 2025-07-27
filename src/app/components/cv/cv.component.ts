import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  readonly experience: Experience[] = [
    {
      title: 'Data Engineer',
      company: 'Current Company',
      duration: '2023 - Present',
      description: [
        'Developed and maintained ETL pipelines using SSIS for automated data processing',
        'Created interactive dashboards and reports using Power BI, SSRS, and BIRT',
        'Built loan management system modules with Angular and .NET Web API',
        'Implemented automated monthly NHB reporting systems with SQL Server'
      ],
      technologies: ['Angular', 'MS SQL Server', 'SSIS', 'Power BI', 'SSRS', 'BIRT', '.NET Web API']
    },
    {
      title: 'Software Developer',
      company: 'Previous Company',
      duration: '2022 - 2023',
      description: [
        'Contributed to loan origination system development',
        'Implemented change requests and built new application screens',
        'Validated critical loan data for compliance and operational efficiency'
      ],
      technologies: ['Angular', 'MS SQL', 'Joget', 'Karomi']
    }
  ];

  readonly education: Education[] = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Your University',
      year: '2018 - 2022',
      details: 'Relevant coursework: Data Structures, Database Management, Software Engineering'
    }
  ];

  readonly skills: Skill[] = [
    {
      category: 'Frontend Development',
      items: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'JavaScript']
    },
    {
      category: 'Backend Development',
      items: ['.NET Web API', 'C#', 'RESTful APIs', 'JWT Authentication']
    },
    {
      category: 'Database & ETL',
      items: ['MS SQL Server', 'SSIS', 'Stored Procedures', 'T-SQL', 'Data Migration']
    },
    {
      category: 'Reporting & Analytics',
      items: ['Power BI', 'SSRS', 'BIRT', 'Dashboard Design', 'Data Visualization']
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Visual Studio', 'SQL Server Management Studio', 'Azure DevOps']
    }
  ];

  downloadCV() {
    // Implement CV download functionality
    console.log('CV download feature - implement with actual CV file');
  }
}
