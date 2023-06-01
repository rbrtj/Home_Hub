import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyCardComponent } from "./property-card/property-card.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PropertyListComponent } from "./property-list/property-list.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        PropertyCardComponent,
        NavbarComponent,
        PropertyListComponent
    ]
})
export class AppModule { }
