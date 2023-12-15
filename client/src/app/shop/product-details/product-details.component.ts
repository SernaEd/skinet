import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product";
import {ShopService} from "../shop.service";
import {ActivatedRoute} from "@angular/router";
import {CurrencyPipe, NgIf} from "@angular/common";
import {BreadcrumbService} from "xng-breadcrumb";

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [
        NgIf,
        CurrencyPipe
    ],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss',
    providers: [ShopService]
})
export class ProductDetailsComponent implements OnInit{
    product?: Product;

    constructor(
        private shopService: ShopService,
        private activatedRoute: ActivatedRoute,
        private bcService: BreadcrumbService) {
        this.bcService.set('@productDetails', ' ');
    }

    ngOnInit(): void {
        this.loadProduct();
    }

    loadProduct() {
        const idGet = this.activatedRoute.snapshot.paramMap.get('id');

        if (idGet) {
            const id = +idGet;
            this.shopService.getProduct(id).subscribe({
                next: product => {
                    this.product = product;
                    this.bcService.set('@productDetails', product.name);
                },
                error: err => console.log(err)
            });
        }
    }

}
