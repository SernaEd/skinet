import { Component, OnInit } from '@angular/core';
import {BreadcrumbModule, BreadcrumbService} from "xng-breadcrumb";
import {AsyncPipe, NgIf, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-section-header',
  standalone: true,
    imports: [
        BreadcrumbModule,
        NgIf,
        TitleCasePipe,
        AsyncPipe
    ],
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
    breadcrumbText = '';

    constructor(public bcService: BreadcrumbService) {}

    ngOnInit() {
        this.bcService.breadcrumbs$.subscribe(breadcrumbs => {
            if (breadcrumbs.length > 0){
                // @ts-ignore
                this.breadcrumbText = breadcrumbs[breadcrumbs.length - 1].routeLink.replaceAll('/', '');

                // @ts-ignore
                this.breadcrumbText = this.breadcrumbText === 'shop' ? this.breadcrumbText : breadcrumbs[breadcrumbs.length - 1].label.toString();
            }
        });
    }

    protected readonly RegExp = RegExp;
}
