import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule // Adicione o CommonModule aqui
  ]
})
export class ProductListModule { }