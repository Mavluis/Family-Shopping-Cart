import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { SocialNetworkUser } from '../core.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Obligatorio!! Generar una unica instancia
})
export class UserService {
  currentUser: SocialNetworkUser;

  constructor(private http: HttpClient) { }

  getUserProfile() {
    return this.http
      .get(`${environment.apiBaseUrl}/user`)
      .pipe(tap((user: SocialNetworkUser) => (this.currentUser = user)));
  }
}
