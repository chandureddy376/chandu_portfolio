import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { About } from './about/about';
import { Service } from './service/service';
import { Resume } from './resume/resume';
import { Project } from './project/project';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Service, Resume, Project, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chandu-portfolio');
}
