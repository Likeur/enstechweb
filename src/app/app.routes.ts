import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'landing',
        title: 'EnstechWeb',
        loadComponent: () => import ('./page/landing/landing.component')
    },
    {
        path: 'template',
        title: 'Ensech-templates',
        loadComponent: () => import ('./page/template/template.component')
    },
    {
        path: 'aboutus',
        title: 'Ensech-apropos',
        loadComponent: () => import ('./page/aboutus/aboutus.component')
    },
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
];
