import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";
import {ShopModule} from "./shop/shop.module";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, CoreModule, ShopModule, HttpClientModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
    title = 'Skinet';

    constructor() {}

    ngOnInit() {
    }

}
