import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  standalone: true,
})
export class PropertyCardComponent {
  @Input() property: any;
}
