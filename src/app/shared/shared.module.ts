import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { MarkAsTouchedDirective } from './directives/mark-as-touched-directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ValidationMessagesComponent,
    MarkAsTouchedDirective,
    NotFoundComponent,
    LoaderComponent
    ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    LoginComponent,
    RegisterComponent,
    ValidationMessagesComponent,
    MarkAsTouchedDirective,
    LoaderComponent
  ]
})
export class SharedModule {}
