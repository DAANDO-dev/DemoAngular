import { Injectable, signal } from '@angular/core';

import { ArticleModel } from '../models/article.model';
import { ProductsComponent } from '../components/to-add-products/to-add-products.component';
import { ArrayType } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ListCourseService {

  list = signal<ArticleModel[]>([]);

  constructor() {
    
  }

  add(article: ArticleModel) {
    this.list.update(old => [...old, article]);
  }

  delete(index: number) {
    this.list.update(old => old.filter((a, i) => i !== index));
  }
}
