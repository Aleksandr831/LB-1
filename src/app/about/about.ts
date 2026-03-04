import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  pageTitle: string = 'Все курсы платформы';
  courseType: string = 'all';

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