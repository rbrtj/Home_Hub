import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";

@Component({
    selector: 'app-property-list',
    templateUrl: './property-list.component.html',
    standalone: true,
    imports: [NgFor, PropertyCardComponent]
})
export class PropertyListComponent {
  properties = [
    {
      id: 1,
      name: 'Empire State Building',
      type: 'office',
      price: 120000,
    },
    {
      id: 2,
      name: 'Some nice building',
      type: 'house',
      price: 120000,
    },
    {
      id: 3,
      name: 'Empire State Building',
      type: 'office',
      price: 120000,
    },
    {
      id: 1,
      name: 'Empire State Building',
      type: 'office',
      price: 120000,
    },
    {
      id: 1,
      name: 'Empire State Building',
      type: 'office',
      price: 120000,
    },
  ];
}
