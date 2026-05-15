import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  loginForm: FormGroup;

  user = {
    email: '',
    fio: '',
    phone: '',
    date: '',
    number: null
  };

  userFormSubmitted: boolean = false;
  userFormErrors: string[] = [];

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      alert('Авторизация успешна! Email: ' + this.loginForm.value.email);
    } else {
      let errors = [];
      if (this.loginForm.get('email')?.hasError('required')) errors.push('Email обязателен');
      if (this.loginForm.get('email')?.hasError('email')) errors.push('Введите корректный email');
      if (this.loginForm.get('password')?.hasError('required')) errors.push('Пароль обязателен');
      if (this.loginForm.get('password')?.hasError('minlength')) errors.push('Пароль минимум 6 символов');
      if (this.loginForm.get('password')?.hasError('maxlength')) errors.push('Пароль максимум 20 символов');
      if (errors.length) alert(errors.join('\n'));
    }
  }

  onUserFormSubmit() {
    this.userFormSubmitted = true;
    this.userFormErrors = [];

    if (!this.user.email) {
      this.userFormErrors.push('Email обязателен');
    } else if (!this.user.email.includes('@')) {
      this.userFormErrors.push('Введите корректный email');
    }

    if (!this.user.fio) {
      this.userFormErrors.push('ФИО обязательно');
    } else if (this.user.fio.length < 2) {
      this.userFormErrors.push('ФИО должно быть не менее 2 символов');
    }

    if (!this.user.phone) {
      this.userFormErrors.push('Телефон обязателен');
    } else if (!this.isPhoneValid(this.user.phone)) {
      this.userFormErrors.push('Введите корректный номер телефона');
    }

    if (!this.user.date) {
      this.userFormErrors.push('Дата обязательна');
    }

    if (!this.user.number) {
      this.userFormErrors.push('Числовое поле обязательно');
    } else if (this.user.number < 1 || this.user.number > 100) {
      this.userFormErrors.push('Число должно быть от 1 до 100');
    }

    if (this.userFormErrors.length === 0) {
      alert('Данные сохранены!\nФИО: ' + this.user.fio + '\nEmail: ' + this.user.email);
      this.userFormSubmitted = false;
      this.user = { email: '', fio: '', phone: '', date: '', number: null };
    }
  }

  isPhoneValid(phone: string): boolean {
    const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/;
    return phoneRegex.test(phone);
  }
}