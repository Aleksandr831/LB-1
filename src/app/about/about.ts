import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card';
import { CourseInfo } from '../course-info/course-info';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent,
    CourseInfo
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements AfterViewInit {
  pageTitle: string = 'Все курсы платформы';
  courseType: string = 'all';
  condition: boolean = true;

  @ViewChild('infoBlock') infoBlock!: ElementRef;

  courses: any[] = [
    {
      id: 1,
      name: 'Личный бюджет',
      price: 3900,
      rating: 4.8,
      description: 'Научитесь управлять деньгами и экономить без стресса',
      isPopular: true,
      isNew: false
    },
    {
      id: 2,
      name: 'Накопления и цели',
      price: 2900,
      rating: 4.6,
      description: 'Как копить на мечту и не отказывать себе в удовольствиях',
      isPopular: true,
      isNew: false
    },
    {
      id: 3,
      name: 'Кредиты и долги',
      price: 4900,
      rating: 4.7,
      description: 'Всё о кредитах: переплаты, досрочное погашение, кредитная история',
      isPopular: false,
      isNew: true
    },
    {
      id: 4,
      name: 'Инвестиции для начинающих',
      price: 5900,
      rating: 4.9,
      description: 'Акции, облигации, ETF — с чего начать инвестировать',
      isPopular: false,
      isNew: true
    },
    {
      id: 5,
      name: 'Пенсионные накопления',
      price: 3900,
      rating: 4.5,
      description: 'Как обеспечить достойную пенсию уже сегодня',
      isPopular: false,
      isNew: false
    }
  ];

  toggle() {
    this.condition = !this.condition;
  }

  ngAfterViewInit() {
    console.log('Блок infoBlock:', this.infoBlock.nativeElement);
    this.infoBlock.nativeElement.style.backgroundColor = '#e8f5e9';
    this.infoBlock.nativeElement.style.border = '2px solid #27ae60';
    this.infoBlock.nativeElement.style.padding = '15px';
    this.infoBlock.nativeElement.style.borderRadius = '8px';
  }
}