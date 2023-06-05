import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-detail.component.html',
})
export class PropertyDetailComponent implements OnInit {
  public propertyId!: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.params['id'];
  }
}
