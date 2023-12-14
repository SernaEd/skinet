import { Component } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {log} from "node:util";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-test-error',
  standalone: true,
    imports: [
        NgIf,
        NgForOf
    ],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.scss'
})
// section Test Error Component
export class TestErrorComponent {
    baseUrl = environment.apiUrl;
    validationErrors: string[] = [];

    // section constructor
    constructor(private http: HttpClient) {}

    // section get404Error
    get404Error() {
        this.http.get(this.baseUrl + 'products/42').subscribe({
            next: response => console.log(response),
            error: err => console.log(err)
        })
    }

    // section get500Error
    get500Error() {
        this.http.get(this.baseUrl + 'buggy/servererror').subscribe({
            next: response => console.log(response),
            error: err => console.log(err)
        })
    }

    // section get400Error
    get400Error() {
        this.http.get(this.baseUrl + 'buggy/badrequest').subscribe({
            next: response => console.log(response),
            error: err => console.log(err)
        })
    }

    // section get400ValidationError
    get400ValidationError() {
        this.http.get(this.baseUrl + 'products/fortytwo').subscribe({
            next: response => console.log(response),
            error: err => {
                console.log(err);
                this.validationErrors = err.errors;
            }
        })
    }
}
