import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { CartService } from 'src/app/core/services/cart.service';
@Component({
    selector: 'sn-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

    tags = [{
        name: 'Beer',
        checked: false
    }, {
        name: 'Biscuits',
        checked: false
    }, {
        name: 'Cereals',
        checked: false
    }, {
        name: 'Chips',
        checked: false
    }];

    changeCheckbox(tags, i) {
        if (tags) {
            this.tags[i].checked = !this.tags[i].checked;
        }
    }

    constructor(
        public userService: UserService,
        public cartService: CartService
    ) { }

    ngOnInit() {
        this.cartService.getCart().subscribe();
    }
}
