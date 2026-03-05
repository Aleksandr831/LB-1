import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss'
})
export class CourseCardComponent {
  @Input() course: any;
  @Input() index: number = 0;

  getRatingColor(rating: number): string {
    if (rating >= 4.8) return '#27ae60';
    if (rating >= 4.5) return '#f39c12';
    return '#e74c3c';
  }

  getPriceClass(price: number): string {
    if (price >= 5000) return 'high-price';
    if (price >= 3000) return 'medium-price';
    return 'low-price';
  }
}