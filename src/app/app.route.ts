import { Route } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
export const APP_ROUTE: Route[] = [
  { path: '', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'rent-property', component: PropertyListComponent },
];
