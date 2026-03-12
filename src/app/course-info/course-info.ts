import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-info.html',
  styleUrl: './course-info.scss'
})
export class CourseInfo {
  @Input() course: any;
}