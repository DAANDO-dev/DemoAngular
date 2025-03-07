import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ArticleModel } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { count, isEmpty } from 'rxjs';

@Component({
  selector: 'app-to-add-products',
  imports: [FormsModule, CommonModule,ConfirmBoxComponent],
  templateUrl: './to-add-products.component.html',
  styleUrl: './to-add-products.component.scss'
})
export class ProductsComponent {
  products: Array<ArticleModel> = [];
  text: string = '';
  checkbox: boolean = false;
  error: string|null = null;
  
  addproduct(){
    this.error = null;
    if(this.text.length == 0){
      this.error = "Remplir le champs"
        return;
    }
    this.products.push({ nom: this.text, important: this.checkbox, showConfirmBox: false })
    this.text = '';
  }

  deleteProduct(ok: boolean, index: number) {
    this.products[index].showConfirmBox = false;
    if(ok) {
      this.products.splice(index, 1);
    }
  
  }

  showConfirm = false;





}


