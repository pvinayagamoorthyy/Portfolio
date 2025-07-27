import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentTab: 'about' | 'skills' | 'projects' | 'contact' = 'about';
  isMobile = false;

  // Add a property to reference the sidebar
  sidebarRef: any;

  selectTab(tab: 'about' | 'skills' | 'projects' | 'contact') {
    this.currentTab = tab;
  }

  ngOnInit() {
    this.checkMobile();
    
    // Optional: Disable right-click context menu (less aggressive)
    // document.addEventListener('contextmenu', (e) => e.preventDefault());
    
    // Optional: Show a friendly message instead of blocking completely
    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase()))
      ) {
        // Just prevent the default action, don't be aggressive
        e.preventDefault();
        console.log('👋 Hi there! Thanks for checking out my portfolio code!');
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  // Add this method to close the sidebar on mobile
  onMenuClick() {
    if (this.isMobile) {
      // Dispatch a custom event to close the sidebar
      window.dispatchEvent(new CustomEvent('closeSidebarOnMobile'));
    }
  }
}
