import { Component, Input } from '@angular/core';
import { IProperty } from '../IProperty.interface';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  standalone: true,
  imports: [MatIconModule, RouterModule],
})
export class PropertyCardComponent {
  @Input()
  property!: IProperty;
}
