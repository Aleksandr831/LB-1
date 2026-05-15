import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

export interface ServerItem {
  id: number;
  title: string;
  body?: string;
  userId?: number;
}

@Component({
  selector: 'app-server-data',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './server-data.html',
  styleUrl: './server-data.scss'
})
export class ServerData implements OnInit {

  items: any[] = [];
  newItemTitle: string = '';
  newItemBody: string = '';
  loading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.loading = true;
    this.errorMessage = '';

    this.apiService.getItems().subscribe({
      next: (data: any[]) => {
        this.items = data.slice(0, 10);
        this.loading = false;
        console.log('Данные загружены:', this.items);
      },
      error: (err: Error) => {
        this.errorMessage = 'Ошибка загрузки данных: ' + err.message;
        this.loading = false;
      }
    });
  }

  addItem(): void {
    if (!this.newItemTitle.trim()) {
      this.errorMessage = 'Введите название';
      return;
    }

    const newItem = {
      title: this.newItemTitle,
      body: this.newItemBody,
      userId: 1
    };

    this.loading = true;
    this.apiService.addItem(newItem).subscribe({
      next: (response: any) => {
        this.successMessage = 'Элемент добавлен! (ID: ' + response.id + ')';
        this.newItemTitle = '';
        this.newItemBody = '';
        this.loadItems();
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err: Error) => {
        this.errorMessage = 'Ошибка добавления: ' + err.message;
        this.loading = false;
        setTimeout(() => this.errorMessage = '', 3000);
      }
    });
  }

  deleteItem(id: number): void {
    if (confirm('Удалить этот элемент?')) {
      this.loading = true;
      this.apiService.deleteItem(String(id)).subscribe({
        next: () => {
          this.successMessage = 'Элемент удалён!';
          this.items = this.items.filter(item => item.id !== id);
          this.loading = false;
          setTimeout(() => this.successMessage = '', 3000);
        },
        error: (err: Error) => {
          this.errorMessage = 'Ошибка удаления: ' + err.message;
          this.loading = false;
          setTimeout(() => this.errorMessage = '', 3000);
        }
      });
    }
  }
}