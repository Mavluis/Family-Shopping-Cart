import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    
    constructor(private http: HttpClient) { }
    
    getCart() {
        return this.http.get(`${environment.apiBaseUrl}/cart`)     
    }

    addCart(note: string, products: [string]) {
        return this.http.post(`${environment.apiBaseUrl}/create-cart`, {
            note,
            products
        })
    }
}
