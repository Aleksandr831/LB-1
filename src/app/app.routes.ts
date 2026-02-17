import { Routes } from '@angular/router';
import { Courses } from './courses/courses';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
   { path: '', component: Courses },
   { path: 'about', component: About },
   { path: 'contact', component: Contact },
   { path: '**', redirectTo: '' }
];