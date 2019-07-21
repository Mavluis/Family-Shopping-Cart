import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatchPasswordValidator } from '../../validator/match-password.validator';
import { ModalService } from 'src/app/core/services/modal.service';
import { MailValidator } from '../../validator/mail.validator';

@Component({
  selector: 'sn-register',
  templateUrl: './register.component.html',
  styleUrls: []
})

/* Validates the data of:
      fullName, minimum 3 characters,
      email,
      password, minimum 7 characters,
      confirmPassword, confirms that it is the same as the password. */

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

  /* It records the data of:
  fullName, 
  email, 
  password,
  in the database and indicates that the email has to be validated. */

  register() {
    const { fullName, email, password } = this.registerForm.value;

    if (this.registerForm.valid) {
      this.authService.register({ fullName, email, password }).subscribe(() => {
        this.registerForm.reset();
        this.modalService.open(
          'Thank you for registering!!',
          'Please, follow the instructions to activate the account in your email, thank you!!'
        );
      });
    }
  }
}
