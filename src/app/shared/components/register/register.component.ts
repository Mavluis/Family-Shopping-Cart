import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatchPasswordValidator } from '../../validator/match-password.validator';
import { ModalService } from 'src/app/core/services/modal.service';
import { MailValidator } from '../../validator/mail.validator';

@Component({
  selector: 'sn-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group(
    {
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, MailValidator]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      confirmPassword: ['', [Validators.required]]
    },
    { validators: MatchPasswordValidator }
  );

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  register() {
    const { fullName, email, password } = this.registerForm.value;

    if (this.registerForm.valid) {
      this.authService.register({ fullName, email, password }).subscribe(() => {
        this.registerForm.reset();
        this.modalService.open(
          'Thanks to register!!',
          'Now go to you email account and check instructions for activating the account'
        );
      });
    }
  }
}
