import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavbarComponent, PropertyListComponent],
})
export class AppComponent {
  title = 'HomeHub';
}
