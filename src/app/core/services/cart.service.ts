import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Post } from 'src/app/features/cart/cart.models';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    posts: Post[];
    
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
