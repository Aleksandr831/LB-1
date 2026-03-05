import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ← ДОБАВИТЬ!

@Component({
  selector: 'app-courses',
  imports: [RouterLink, FormsModule, CommonModule], // ← CommonModule НУЖЕН!
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses {
  pageTitle: string = 'Курсы по финансовой грамотности';
  courseImageUrl: string = 'https://img.icons8.com/color/96/000000/money--v1.png';
  imageWidth: number = 80;
  imageHeight: number = 80;
  clickMessage: string = '';

  buttonClicked() {
    this.clickMessage = 'Кнопка была нажата! Спасибо за интерес к курсам.';
  }

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

  inputPlaceholder: string = 'Введите ваш комментарий...';
  inputMaxLength: number = 100;
  isSpecial: boolean = true;
  isImportant: boolean = false;

  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }

  toggleImportant() {
    this.isImportant = !this.isImportant;
  }

  commentBoxColor: string = '#f0f0f0';
  commentBoxFontSize: string = '16px';

  changeColor(color: string) {
    this.commentBoxColor = color;
  }
}