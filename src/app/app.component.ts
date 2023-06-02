import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavbarComponent, PropertyListComponent, RouterOutlet],
})
export class AppComponent {
  title = 'HomeHub';
}

