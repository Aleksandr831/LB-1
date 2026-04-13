import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService, Course } from '../services/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses implements OnInit {

  courses: Course[] = [];

  pageTitle: string = 'Курсы по финансовой грамотности';
  courseImageUrl: string = 'https://img.icons8.com/color/96/000000/money--v1.png';
  imageWidth: number = 80;
  imageHeight: number = 80;

  clickMessage: string = '';

  newComment: string = '';
  comments: string[] = [
    'Отличные курсы!',
    'Хочу записаться на Личный бюджет',
    'А будут курсы по инвестициям?'
  ];

  inputPlaceholder: string = 'Введите ваш комментарий...';
  inputMaxLength: number = 100;

  isSpecial: boolean = true;
  isImportant: boolean = false;

  commentBoxColor: string = '#f0f0f0';
  commentBoxFontSize: string = '16px';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  buttonClicked() {
    this.clickMessage = 'Кнопка была нажата! Спасибо за интерес к курсам.';
  }

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment);
      this.newComment = '';
    }
  }

  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }

  toggleImportant() {
    this.isImportant = !this.isImportant;
  }

  changeColor(color: string) {
    this.commentBoxColor = color;
  }
}