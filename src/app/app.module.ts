import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyListComponent } from './property-list/property-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [],
  providers: [],
  bootstrap: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PropertyListComponent,
    NavbarComponent,
  ],
})
export class AppModule {}
