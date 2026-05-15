import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private localData: any[] = [
    { id: 1, title: 'Личный бюджет', body: 'Научитесь управлять деньгами' },
    { id: 2, title: 'Накопления и цели', body: 'Как копить на мечту' },
    { id: 3, title: 'Кредиты и долги', body: 'Всё о кредитах' },
    { id: 4, title: 'Инвестиции для начинающих', body: 'Акции, облигации, ETF' },
    { id: 5, title: 'Пенсионные накопления', body: 'Как обеспечить достойную пенсию' }
  ];

  getItems(): Observable<any[]> {
    return of(this.localData);
  }

  addItem(item: any): Observable<any> {
    const newItem = { id: Date.now(), ...item };
    this.localData.push(newItem);
    return of(newItem);
  }

  deleteItem(id: string): Observable<any> {
    this.localData = this.localData.filter(item => item.id !== Number(id));
    return of({ success: true });
  }
}