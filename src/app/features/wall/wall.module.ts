import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './wall/wall.component';
import { PublisherComponent } from './publisher/publisher.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: WallComponent
  }
];

@NgModule({
  declarations: [WallComponent, PublisherComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class WallModule { }
