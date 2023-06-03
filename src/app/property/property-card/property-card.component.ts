import { Component, Input } from '@angular/core';
import { IProperty } from '../IProperty.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  standalone: true,
  imports: [MatIconModule],
})
export class PropertyCardComponent {
  @Input()
  property!: IProperty;
}
