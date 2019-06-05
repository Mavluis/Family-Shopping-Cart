import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PublisherComponent } from './publisher/publisher.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
];

@NgModule({
  declarations: [CartComponent, PublisherComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class CartModule { }
