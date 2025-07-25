import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Error } from './components/error/error';


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'portfolio', component: Portfolio},
    {path: 'contact', component: Contact},
    {path: '**', component: Error}
];
