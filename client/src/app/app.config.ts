import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch} from "@angular/common/http";
import {ErrorInterceptor} from "./core/interceptors/error.interceptor";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideToastr} from "ngx-toastr";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideClientHydration(),
        provideHttpClient(withFetch()),
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        provideAnimations(),
        provideToastr(),
    ]
};
