import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './property-detail.component.html',
})
export class PropertyDetailComponent implements OnInit {
  public propertyId!: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.propertyId = +params['id'];
    })
  }

  onSelectNext() {
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
