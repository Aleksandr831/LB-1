import { Routes } from '@angular/router';
import { Courses } from './courses/courses';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { PageNotFoundException } from './page-not-found/page-not-found';
import { ServerData } from './server-data/server-data';

export const routes: Routes = [
   { path: '', component: Courses },
   { path: 'about', component: About },
   { path: 'contact', component: Contact },
   { path: 'server', component: ServerData },
   { path: '**', component: PageNotFoundException }  // ← здесь две звёздочки в кавычках
];