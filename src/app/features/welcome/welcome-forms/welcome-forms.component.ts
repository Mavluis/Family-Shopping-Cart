import { Component } from '@angular/core';

@Component({
  selector: 'sn-welcome-forms',
  templateUrl: './welcome-forms.component.html'
})
export class WelcomeFormsComponent {
  isRegisterFormVisible = true;

  toggleForm(isRegisterClick) {
    this.isRegisterFormVisible = isRegisterClick;
  }
}
