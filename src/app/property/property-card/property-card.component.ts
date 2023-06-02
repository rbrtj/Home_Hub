import { Component, Input } from '@angular/core';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  standalone: true,
})
export class PropertyCardComponent {
  @Input()
  property!: IProperty;
}
