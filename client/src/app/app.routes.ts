import {Route} from '@angular/router';

export const routes: Route[] = [
    {path: '', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)},
    {path: 'shop', loadChildren: () => import('./shop/routes')},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
