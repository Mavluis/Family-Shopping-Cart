import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { CartService } from 'src/app/core/services/cart.service';
import { CartResponse } from '../cart.models';
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
    }, {
        name: 'Fruit',
        checked: false
    }, {
        name: 'Milk',
        checked: false
    }, {
        name: 'Potatoes',
        checked: false
    }, {
        name: 'TomatoBrick',
        checked: false
    }, {
        name: 'Water',
        checked: false
    }, {
        name: 'Yogourt',
        checked: false
    }];

    tags1 = [{
        name: 'Butter',
        checked: false
    }, {
        name: 'ColdCuts',
        checked: false
    }, {
        name: 'Eggs',
        checked: false
    }, {
        name: 'Eggplant',
        checked: false
    }, {
        name: 'Macaroni',
        checked: false
    }, {
        name: 'Mushrooms',
        checked: false
    }, {
        name: 'Olives',
        checked: false
    }, {
        name: 'Sausages',
        checked: false
    }, {
        name: 'Spaghetti',
        checked: false
    }, {
        name: 'Squash',
        checked: false
    }];

    tags2 = [{
        name: 'Apples',
        checked: false
    }, {
        name: 'Celery',
        checked: false
    }, {
        name: 'CleaningSupplies',
        checked: false
    }, {
        name: 'Melon',
        checked: false
    }, {
        name: 'Onions',
        checked: false
    }, {
        name: 'ParchmentPaper',
        checked: false
    }, {
        name: 'Pears',
        checked: false
    }, {
        name: 'Pizza',
        checked: false
    }, {
        name: 'Strawberries',
        checked: false
    }, {
        name: 'Zucchini',
        checked: false
    }];

    tags3 = [{
        name: 'Bananas',
        checked: false
    }, {
        name: 'BottledWater',
        checked: false
    }, {
        name: 'Cherry',
        checked: false
    }, {
        name: 'Coffee',
        checked: false
    }, {
        name: 'Deodorant',
        checked: false
    }, {
        name: 'GlassCleaner',
        checked: false
    }, {
        name: 'OrangeJuice',
        checked: false
    }, {
        name: 'RedWine',
        checked: false
    }, {
        name: 'ToiletPaper',
        checked: false
    }, {
        name: 'Watermelon',
        checked: false
    }];

    note = "";

    constructor(
        public userService: UserService,
        public cartService: CartService
    ) { }

    ngOnInit() {
        this.cartService.getCart().subscribe((data: CartResponse) => {
            this.note = data.note;
            data.products.forEach(product => {
                for (let i = 0; i < this.tags.length; i++) {
                    if (product === this.tags[i].name) {
                        this.tags[i].checked = true;
                    }
                }
                for (let i = 0; i < this.tags1.length; i++) {
                    if (product === this.tags1[i].name) {
                        this.tags1[i].checked = true;
                    }
                }
                for (let i = 0; i < this.tags2.length; i++) {
                    if (product === this.tags2[i].name) {
                        this.tags2[i].checked = true;
                    }
                }
                for (let i = 0; i < this.tags3.length; i++) {
                    if (product === this.tags3[i].name) {
                        this.tags3[i].checked = true;
                    }
                }

            })
        });
        
    }
}
