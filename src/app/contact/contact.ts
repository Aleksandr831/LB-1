import { Component, OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  @Input() testValue: string = '';

  loginForm: FormGroup;
  userForm: FormGroup;

  loginErrors: string[] = [];
  userFormErrors: string[] = [];

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });

    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      fio: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      phone: new FormControl('', [Validators.required, this.phoneValidator]),
      date: new FormControl('', [Validators.required, this.dateValidator]),
      number: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)])
    });
  }

  phoneValidator(control: AbstractControl): ValidationErrors | null {
    const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/;
    const valid = phoneRegex.test(control.value);
    return valid ? null : { invalidPhone: true };
  }

  dateValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const date = new Date(control.value);
    const isValid = !isNaN(date.getTime());
    return isValid ? null : { invalidDate: true };
  }

  onLoginSubmit() {
    this.loginErrors = [];
    if (this.loginForm.valid) {
      console.log('Авторизация успешна:', this.loginForm.value);
      alert('Авторизация успешна! Email: ' + this.loginForm.value.email);
    } else {
      if (this.loginForm.get('email')?.hasError('required')) {
        this.loginErrors.push('Email обязателен для заполнения');
      }
      if (this.loginForm.get('email')?.hasError('email')) {
        this.loginErrors.push('Введите корректный email');
      }
      if (this.loginForm.get('password')?.hasError('required')) {
        this.loginErrors.push('Пароль обязателен для заполнения');
      }
      if (this.loginForm.get('password')?.hasError('minlength')) {
        this.loginErrors.push('Пароль должен быть не менее 6 символов');
      }
      if (this.loginForm.get('password')?.hasError('maxlength')) {
        this.loginErrors.push('Пароль должен быть не более 20 символов');
      }
    }
  }

  onUserFormSubmit() {
    this.userFormErrors = [];
    if (this.userForm.valid) {
      console.log('Данные пользователя:', this.userForm.value);
      alert('Данные сохранены!\nФИО: ' + this.userForm.value.fio + '\nEmail: ' + this.userForm.value.email);
    } else {
      const emailCtrl = this.userForm.get('email');
      const fioCtrl = this.userForm.get('fio');
      const phoneCtrl = this.userForm.get('phone');
      const dateCtrl = this.userForm.get('date');
      const numberCtrl = this.userForm.get('number');

      if (emailCtrl?.hasError('required')) this.userFormErrors.push('Email обязателен');
      if (emailCtrl?.hasError('email')) this.userFormErrors.push('Введите корректный email');

      if (fioCtrl?.hasError('required')) this.userFormErrors.push('ФИО обязательно');
      if (fioCtrl?.hasError('maxlength')) this.userFormErrors.push('ФИО должно быть не более 100 символов');

      if (phoneCtrl?.hasError('required')) this.userFormErrors.push('Телефон обязателен');
      if (phoneCtrl?.hasError('invalidPhone')) this.userFormErrors.push('Введите корректный номер телефона');

      if (dateCtrl?.hasError('required')) this.userFormErrors.push('Дата обязательна');
      if (dateCtrl?.hasError('invalidDate')) this.userFormErrors.push('Введите корректную дату');

      if (numberCtrl?.hasError('required')) this.userFormErrors.push('Числовое поле обязательно');
      if (numberCtrl?.hasError('min')) this.userFormErrors.push('Число должно быть не менее 1');
      if (numberCtrl?.hasError('max')) this.userFormErrors.push('Число должно быть не более 100');
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit — компонент инициализирован');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges — входные свойства изменились', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck — проверка изменений');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit — контент загружен');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked — проверка контента');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit — представление загружено');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked — проверка представления');
  }
}