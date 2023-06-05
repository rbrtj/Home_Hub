import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  standalone: true,
  imports: [NgFor, PropertyCardComponent],
})
export class PropertyListComponent implements OnInit {
  sellRent = 1;
  properties: Array<IProperty> = [];
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.sellRent = 2; // 2 = rent url, 1 = buy url
    }
    this.housingService
      .getAllProperties(this.sellRent)
      .subscribe((properties) => {
        this.properties = properties;
      });
  }
}
