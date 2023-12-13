import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ShopService} from "./shop.service";
import {ShopComponent} from "./shop.component";
import {ProductItemComponent} from "./product-item/product-item.component";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {PagingHeaderComponent} from "./paging-header/paging-header.component";
import {PagerComponent} from "../shared/pager/pager.component";



@NgModule({
    declarations: [
        ShopComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ProductItemComponent,
        PaginationModule,
        PagingHeaderComponent,
        PagerComponent
    ],
    exports: [
        ShopComponent
    ],
    providers: [
        ShopService
    ]
})
export class ShopModule { }
