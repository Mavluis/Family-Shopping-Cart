import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
];

@NgModule({
  declarations: [CartComponent],
  imports: [ReactiveFormsModule, CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class CartModule { }
