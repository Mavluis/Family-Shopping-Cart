import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { CartService } from 'src/app/core/services/cart.service';
import { PublisherComponent } from '../publisher/publisher.component';

@Component({
    selector: 'sn-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit, AfterViewInit {
    convertToHtml: () => {};
    @ViewChildren(PublisherComponent) publisherComponents;

    constructor(
        public userService: UserService,
        public cartService: CartService
    ) { }

    ngOnInit() {
        this.cartService.getCart().subscribe();
    }

    ngAfterViewInit() {
        console.log(this.publisherComponents);
    }

    addPost(content) {
        this.cartService.publish(content).subscribe();
    }

    addComment(postId, message) {
        this.cartService
            .addComment(postId, message, this.userService.currentUser)
            .subscribe();
    }
}