import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ShoppingCartUser } from '../core.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Obligatorio!! Generar una unica instancia
})
export class UserService {
  currentUser: ShoppingCartUser;

  constructor(private http: HttpClient) { }

  getUserProfile() {
    return this.http
      .get(`${environment.apiBaseUrl}/user`)
      .pipe(tap((user: ShoppingCartUser) => (this.currentUser = user)));
  }

  updateProfile(profile) {
    return this.http.put(`${environment.apiBaseUrl}/user`, profile).pipe(
      tap(() => {
        this.currentUser = {
          ...this.currentUser,
          ...profile
        };
      })
    );
  }
}
