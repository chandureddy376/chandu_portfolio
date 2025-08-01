import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    MenubarModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  encapsulation: ViewEncapsulation.None
})
export class Navbar {
  items: MenuItem[] = [];
  currentRoute: string = '';
  activeSection: string = 'home';
  navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Service', id: 'service' },
    { label: 'Resume', id: 'resume' },
    { label: 'Project', id: 'project' },
    { label: 'Contact', id: 'contact' }
  ];
  constructor(private router: Router) {

  }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
    setTimeout(() => this.onScroll(), 0);
  }

  onNavClick(id: string): void {
    // Update URL (like /#about)
    this.router.navigate([], { fragment: id });

    // Scroll to section
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // Set active section manually
    this.activeSection = id;
  }

  onScroll(): void {
    const sectionIds = this.navItems.map(i => i.id);
    let closestSection: string = '';
    let minDistance = Infinity;

    for (let id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - 100);
        // if (rect.top <= 100 && rect.bottom > 100) {
        //   this.activeSection = id;

        //   // Update URL (like /#about) without reload
        //   history.replaceState(null, '', `#${id}`);
        //   break;
        // }
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = id;
        }
      }
    }
    if (closestSection && closestSection !== this.activeSection) {
      this.activeSection = closestSection;
      history.replaceState(null, '', `#${closestSection}`);
    }
  }


}
