import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { CartService } from 'src/app/core/services/cart.service';
@Component({
    selector: 'sn-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

    constructor(
        public userService: UserService,
        public cartService: CartService
    ) { }

    ngOnInit() {
        this.cartService.getCart().subscribe();
    }
}