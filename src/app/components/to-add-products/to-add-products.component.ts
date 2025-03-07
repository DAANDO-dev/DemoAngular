import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ArticleModel } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { count, isEmpty } from 'rxjs';
import { ListCourseService } from '../../services/list-course.service';

@Component({
  selector: 'app-to-add-products',
  imports: [FormsModule, CommonModule,ConfirmBoxComponent],
  templateUrl: './to-add-products.component.html',
  styleUrl: './to-add-products.component.scss'
})
export class ProductsComponent {
  text: string = '';
  checkbox: boolean = false;
  error: string|null = null;
  listCourseService = inject(ListCourseService);
  
  addproduct(){
    this.error = null;
    if(this.text.length == 0){
      this.error = "Remplir le champs"
        return;
    }
    this.listCourseService.add({
       nom: this.text.trim(),
        important: this.checkbox,
         showConfirmBox: false 
        })
    this.text = '';
  }

  deleteProduct(ok: boolean, index: number) {
    //this.products[index].showConfirmBox = false;
    if(ok) {
      this.listCourseService.delete(index)
      // this.products.
    }
  
  }

  showConfirm = false;





}


