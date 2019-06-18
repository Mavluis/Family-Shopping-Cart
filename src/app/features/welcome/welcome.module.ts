import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeFormsComponent } from './welcome-forms/welcome-forms.component';
import { WelcomeHeroComponent } from './welcome-hero/welcome-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonsModule, CarouselModule, WavesModule, IconsModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
];

@NgModule({
  declarations: [WelcomeComponent, WelcomeFormsComponent, WelcomeHeroComponent],
  imports: [ButtonsModule, CarouselModule, WavesModule, IconsModule, MDBBootstrapModule.forRoot(),
    DropdownModule.forRoot(), CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class WelcomeModule { }
