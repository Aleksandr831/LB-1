import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses {
  // Для интерполяции и property binding
  pageTitle: string = 'Курсы по финансовой грамотности';
  courseImageUrl: string = 'https://img.icons8.com/color/96/000000/money--v1.png';
  imageWidth: number = 80;
  imageHeight: number = 80;

  // Для event binding
  clickMessage: string = '';
  buttonClicked() {
    this.clickMessage = 'Кнопка была нажата! Спасибо за интерес к курсам.';
  }

  // Для двусторонней привязки (чат)
  newComment: string = '';
  comments: string[] = [
    'Отличные курсы!',
    'Хочу записаться на Личный бюджет',
    'А будут курсы по инвестициям?'
  ];
  addComment() {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment);
      this.newComment = '';
    }
  }

  // Для привязки к атрибуту
  inputPlaceholder: string = 'Введите ваш комментарий...';
  inputMaxLength: number = 100;

  // Для привязки к CSS классу
  isSpecial: boolean = true;
  isImportant: boolean = false;
  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }
  toggleImportant() {
    this.isImportant = !this.isImportant;
  }

  // Для привязки к стилю
  commentBoxColor: string = '#f0f0f0';
  commentBoxFontSize: string = '16px';
  changeColor(color: string) {
    this.commentBoxColor = color;
  }
}