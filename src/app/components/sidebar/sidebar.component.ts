import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

interface ProfileData {
  name: string;
  roles: string[];
  email: string;
  location: string;
  avatar: string;
  socialLinks: {
    linkedin: string;
    github: string;
  };
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  profileData: ProfileData = {
    name: 'Vinayaga Moorthi P',
    roles: [
      'SQL Developer',
      'Data Analyst',
      'ETL & BI Reporting Specialist'
    ],
    email: 'pvinayagamoorthyy@gmail.com',
    location: 'Bangalore, India',
    avatar: 'assets/images/tech-avatar.png',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/pvinayagamoorthi-85834932b',
      github: 'https://github.com/pvinayagamoorthyy'
    }
  };

  avatarError = false;
  defaultAvatar = 'assets/images/default-avatar.svg';

  private resizeObserver?: ResizeObserver;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // Component initialization
  }

  ngOnInit(): void {
    this.setupHeightMatching();
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private setupHeightMatching(): void {
    // Simple approach - just ensure sidebar matches viewport height
    // No dynamic height matching to prevent scrolling issues
    const viewportHeight = window.innerHeight - 48;
    const sidebar = this.elementRef.nativeElement.querySelector('.sidebar');
    
    if (sidebar) {
      this.renderer.setStyle(sidebar, 'min-height', `${viewportHeight}px`);
      this.renderer.setStyle(sidebar, 'height', 'auto');
    }
  }

  onAvatarError(): void {
    this.avatarError = true;
  }

  onSocialLinkClick(platform: string): void {
    // Analytics tracking could be added here
    console.log(`Social link clicked: ${platform}`);
  }

  onEmailClick(): void {
    // Analytics tracking for email clicks
    console.log('Email link clicked');
  }
}