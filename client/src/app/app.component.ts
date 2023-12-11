import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Product} from "./models/product";
import {Pagination} from "./models/pagination";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavBarComponent, HttpClientModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
    title = 'Skinet';
    products: Product[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<Pagination<Product[]>>('https://localhost:5001/api/products?pageSize=50')
            .subscribe({
                next: (res: any) => this.products = res.data,
                error: err => console.log(err),
                complete: () => {
                    console.log('Completed');
                }
            })
    }

}
