import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavbarComponent, RouterModule, PropertyListComponent, CommonModule],
})
export class AppComponent {
  title = 'HomeHub';
}
