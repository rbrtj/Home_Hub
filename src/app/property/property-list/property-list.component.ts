import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  standalone: true,
  imports: [NgFor, PropertyCardComponent],
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty> = [];
  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe((res) => {
      this.properties = res;
    });
  }
}
