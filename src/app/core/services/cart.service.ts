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
        .pipe(
            tap((posts: Post[]) => {
                this.posts = posts.sort((p1, p2) => {
                    return p2.createdAt - p1.createdAt;
                });
                console.log("System Failure!!!");
                })
            );
    }

    addCart(uuid: string, note: string, products: string) {
        return this.http.post(`${environment.apiBaseUrl}/post/${uuid}/create-cart`, {
            note,
            products
        })
            .pipe(
                tap(() => {
                    this.posts.map(post => {
                        if (true) {
                            post.notes.unshift({
                                id: this.uuidv4(),
                                createdAt: Date.now(),
                                note,
                                products
                            });
                        }
                        return post;
                    });
                })
            );
    }
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
