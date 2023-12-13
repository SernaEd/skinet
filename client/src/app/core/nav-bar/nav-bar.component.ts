import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    standalone: true,
    styleUrl: './nav-bar.component.scss',
    imports: [
        CommonModule,
        NgOptimizedImage,
        RouterLink,
        RouterLinkActive,
    ]
})
export class NavBarComponent {

}
