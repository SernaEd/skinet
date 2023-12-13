import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../shared/models/product";
import {ShopService} from "./shop.service";
import {Pagination} from "../shared/models/pagination";
import {Brand} from "../shared/models/brand";
import {Type} from "../shared/models/type";
import {ShopParams} from "../shared/models/shopParams";
import {PagingHeaderComponent} from "./paging-header/paging-header.component";
import {ProductItemComponent} from "./product-item/product-item.component";
import {PagerComponent} from "../shared/pager/pager.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.scss',
    standalone: true,
    imports: [PagingHeaderComponent, ProductItemComponent, PagerComponent, NgForOf, NgIf],
    providers: [ShopService]
})
export class ShopComponent implements OnInit{
    @ViewChild('search', {static: false}) searchTerm?: ElementRef;
    products: Product[] = [];
    brands: Brand[] = [];
    types: Type[] = [];
    shopParams = new ShopParams();
    sortOptions = [
        {name: 'Alphabetical', value: 'name'},
        {name: 'Price: Low to High', value: 'priceAsc'},
        {name: 'Price: High to Low', value: 'priceDesc'}
    ];
    totalCount = 0;

    constructor(private shopService : ShopService) {}

    ngOnInit(): void {
        this.getProducts();
        this.getBrands();
        this.getTypes();
    }

    private getProducts() {
        this.shopService.getProducts(this.shopParams)
            .subscribe({
                next: (res: Pagination<Product[]>) => {
                    this.products = res.data;
                    this.shopParams.pageNumber = res.pageIndex;
                    this.shopParams.pageSize = res.pageSize;
                    this.totalCount = res.count;
                },
                error: err => console.log(err),
                complete: () => {
                    console.log('Got products');
                }
            })
    }

    private getBrands() {
        this.shopService.getBrands()
            .subscribe({
                next: (res: Brand[]) => this.brands = [{id: 0, name: 'All'}, ...res],
                error: err => console.log(err),
                complete: () => {
                    console.log('Got brands');
                }
            })
    }

    private getTypes() {
        this.shopService.getTypes()
            .subscribe({
                next: (res: Type[]) => this.types = [{id: 0, name: 'All'}, ...res],
                error: err => console.log(err),
                complete: () => {
                    console.log('Got types');
                }
            })
    }

    onBrandSelected(brandId: number) {
        this.shopParams.brandId = brandId;
        this.shopParams.pageNumber = 1;
        this.getProducts();
    }

    onTypeSelected(typeId: number) {
        this.shopParams.typeId = typeId;
        this.shopParams.pageNumber = 1;
        this.getProducts();
    }

    onSortSelected(event: any) {
        this.shopParams.sort = event.target.value;
        this.getProducts();
    }

    onPageChanged(event: any) {
        if (this.shopParams.pageNumber !== event) {
            this.shopParams.pageNumber = event;
            this.getProducts();
        }
    }

    onSearch() {
        this.shopParams.search = this.searchTerm?.nativeElement.value;
        this.shopParams.pageNumber = 1;
        this.getProducts();
    }

    onReset() {
        if (this.searchTerm) this.searchTerm.nativeElement.value = '';
        this.shopParams = new ShopParams();
        this.getProducts();
    }
}
