import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { About } from './about/about';
import { Service } from './service/service';
import { Resume } from './resume/resume';
import { Project } from './project/project';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch: 'full'},
    { path: 'home',component:Home },
    { path: 'about',component:About },
    { path: 'service',component:Service },
    { path: 'resume',component:Resume },
    { path: 'project',component:Project },
    { path: 'contact',component:Contact },
];
