import {Route} from '@angular/router';
import {TestErrorComponent} from "./core/test-error/test-error.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {ServerErrorComponent} from "./core/server-error/server-error.component";

export const routes: Route[] = [
    {path: '', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)},
    {path: 'test-error', component: TestErrorComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'server-error', component: ServerErrorComponent},
    {path: 'shop', loadChildren: () => import('./shop/routes')},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
