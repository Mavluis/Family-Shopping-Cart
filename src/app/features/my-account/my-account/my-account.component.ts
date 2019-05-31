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
            isPublicProfile: [false],
            linkedIn: ['', [Validators.nullValidator]],
            twitter: ['', [Validators.nullValidator]],
            github: ['', [Validators.nullValidator]],
            description: []
        })
    });

    constructor(private fb: FormBuilder, private userService: UserService) { }

    ngOnInit() {
        this.updateProfileForm.setValue({
            fullName: this.userService.currentUser.fullName,
            preferences: {
                ...this.userService.currentUser.preferences
            }
        });
    }

    updateProfile() {
        if (this.updateProfileForm.valid) {
            for (const prop of this.updateProfileForm.value.preferences) {
                if (!this.updateProfileForm.value.preferences[prop]) {
                    this.updateProfileForm.value.preferences[prop] = '';
                }
            }
            this.userService.updateProfile(this.updateProfileForm.value).subscribe();
        }
    }
}
