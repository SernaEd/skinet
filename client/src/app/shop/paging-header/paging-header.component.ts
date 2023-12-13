import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-paging-header',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './paging-header.component.html',
    styleUrl: './paging-header.component.scss'
})
export class PagingHeaderComponent {
    @Input() totalCount?: number;
    @Input() pageNumber?: number;
    @Input() pageSize?: number;
}
