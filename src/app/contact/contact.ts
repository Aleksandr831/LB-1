import { Component, Input, OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  @Input() testValue: string = '';

  courseName: string = 'Накопления и цели';
  duration: string = '3 недели';
  startDate: string = '1 апреля';

  program: string[] = [
    'Подушка безопасности: сколько и где хранить',
    'Инструменты накопления',
    'Автоматизация сбережений',
    'Инвестиции для начинающих'
  ];

  counter: number = 0;

  onPageClick(): void {
    console.log('Клик по странице!');
  }

  ngOnInit(): void {
    console.log('ngOnInit — компонент инициализирован');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges — входные свойства изменились', changes);
  }

  ngDoCheck(): void {
    this.counter++;
    console.log(`ngDoCheck — проверка изменений (вызов №${this.counter})`);
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