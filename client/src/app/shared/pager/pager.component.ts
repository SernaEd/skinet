import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-pager',
  standalone: true,
    imports: [
        PaginationModule,
        NgIf,
        FormsModule
    ],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.scss'
})
export class PagerComponent {
    @Input() totalCount?: number;
    @Input() pageSize?: number;
    @Input() pageNumber?: number;
    @Output() pageChanged = new EventEmitter<number>();

    onPagerChanged(event: any) {
        this.pageChanged.emit(event.page);
    }

}
