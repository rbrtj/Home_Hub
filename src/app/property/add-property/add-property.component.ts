import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  standalone: true,
  imports: [MatButtonModule],
})
export class AddPropertyComponent {
  constructor(private router: Router) {}

  onBack(): void {
    this.router.navigate(['/']);
  }
}
