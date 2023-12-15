import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {ShopComponent} from "./shop/shop.component";
import {NavBarComponent} from "./core/nav-bar/nav-bar.component";
import {SectionHeaderComponent} from "./core/section-header/section-header.component";
import {NgxSpinnerModule} from "ngx-spinner";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HttpClientModule, ShopComponent, NavBarComponent, SectionHeaderComponent, NgxSpinnerModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
    title = 'Skinet';

    constructor() {}

    ngOnInit() {
    }

}
