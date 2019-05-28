import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { MailValidator } from '../../validator/mail.validator';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'sn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, MailValidator]],
    password: ['', [Validators.required, Validators.minLength(7)]]
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService) { }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        () => {
          this.userService.getUserProfile().subscribe();
          console.log(this.authService, this.userService);
          this.router.navigate(['/wall']);
        },
        () => this.loginForm.get('password').setValue('')
      );
    }
  }
}
