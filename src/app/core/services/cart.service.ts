import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private http: HttpClient) { }

    /* Function to modify or add products and notes in the BB.DD. */

    addCart(note: string, names: string[]) {
        return this.http.post(`${environment.apiBaseUrl}/create-cart`, {
            note,
            names
        })
    }

    /* Function to pick up the products and notes saved in the BB.DD. */

    getCart() {
        return this.http.get(`${environment.apiBaseUrl}/cart`)
    }
}
