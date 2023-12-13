import {Route} from "@angular/router";

export default [
    {path: '', loadComponent: () => import('./shop.component').then(mod => mod.ShopComponent)},
    {path: ':id', loadComponent: () => import('./product-details/product-details.component').then(mod => mod.ProductDetailsComponent)},
] satisfies Route[];
