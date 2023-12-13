import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product";
import {ShopService} from "../shop.service";
import {ActivatedRoute} from "@angular/router";
import {CurrencyPipe, NgIf} from "@angular/common";

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

    constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

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
                },
                error: err => console.log(err)
            });
        }
    }

}
