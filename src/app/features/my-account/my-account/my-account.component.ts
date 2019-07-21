import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'sn-my-account',
    templateUrl: './my-account.component.html',
    styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
    updateProfileForm = this.fb.group({
        fullName: ['', [Validators.required]],
        preferences: this.fb.group({
            password: ['', [Validators.nullValidator]],
            newpassword: ['', [Validators.nullValidator]],
            repeatnewpass: ['', [Validators.nullValidator]],
            regularlist: []
        })
    });

    constructor(private fb: FormBuilder, private userService: UserService, private http: HttpClient) { }

    ngOnInit() { }
    updateProfile() {
        return this.http.get(`${environment.apiBaseUrl}/user`)
    }
}
