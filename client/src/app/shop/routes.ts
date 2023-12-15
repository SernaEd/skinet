import {Route} from "@angular/router";

export default [
    {path: '', loadComponent: () => import('./shop.component').then(mod => mod.ShopComponent), data: {breadcrumb: 'shop'}},
    {path: ':id', loadComponent: () => import('./product-details/product-details.component').then(mod => mod.ProductDetailsComponent), data: {breadcrumb: {alias: 'productDetails'}}},
] satisfies Route[];
