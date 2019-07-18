import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { CartService } from 'src/app/core/services/cart.service';
import { CartResponse } from '../cart.models';
import { FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
    selector: 'sn-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

/* Exports the class of initial products and notes that are going to have "false"
value until the user checked them. */

export class CartComponent implements OnInit {

    form: FormGroup;

    items: string[] = [
        "Beer",
        "Biscuits",
        "Cereals",
        "Chips",
        "Fruit",
        "Milk",
        "Potatoes",
        "TomatoBrick",
        "Water",
        "Yogourt"
    ];

    items1: string[] = [
        "Butter",
        "ColdCuts",
        "Eggs",
        "Eggplant",
        "Macaroni",
        "Mushrooms",
        "Olives",
        "Sausages",
        "Spaghetti",
        "Squash"
    ];

    items2: string[] = [
        "Apples",
        "Celery",
        "CleaningSupplies",
        "Melon",
        "Onions",
        "ParchmentPaper",
        "Pears",
        "Pizza",
        "Strawberries",
        "Zucchini"
    ];

    items3: string[] = [
        "Bananas",
        "BottledWater",
        "Cherry",
        "Coffee",
        "Deodorant",
        "GlassCleaner",
        "OrangeJuice",
        "RedWine",
        "ToiletPaper",
        "Watermelon"
    ];

    constructor(
        private fb: FormBuilder,
        private modalService: ModalService,
        public userService: UserService,
        public cartService: CartService
    ) { }

    note = "";

    /* Checked the products and user notes that are stored in 
    the database to leave them "true" and paint them on screen. */

    ngOnInit() {

        const isPresent = (product: string, products: string[]) => {
                for (let i = 0; i < product.length; i++) {
                    if (product === products[i])
                    return true;
                    
                }
        };

        const initCheckboxForm = (item: string, itemsFromServer: string[]) => {
                const abstractControl: AbstractControl = this.form.get("checkboxes");
                const isToCheck = isPresent(item, itemsFromServer);
                if (abstractControl instanceof FormGroup) {
                    (<FormGroup>abstractControl).addControl(item, new FormControl(isToCheck));
                }
            }

            this.cartService.getCart().subscribe((data: CartResponse) => {
                this.note = data.note;
                const itemsFromServer = data.products;
                console.log(data.products);
                console.log(data.note);

                this.form = this.fb.group({
                    note: [this.note],
                    checkboxes: this.fb.group({})
                });

                this.items.forEach((item) => initCheckboxForm(item, itemsFromServer));
                this.items1.forEach((item) => initCheckboxForm(item, itemsFromServer));
                this.items2.forEach((item) => initCheckboxForm(item, itemsFromServer));
                this.items3.forEach((item) => initCheckboxForm(item, itemsFromServer));
            })
        }

        addCart() {

            const { note, checkboxes } = this.form.value;

            console.log(this.form.value);

            const item = checkboxes.filter(true);

            if (this.form.valid) {
                this.cartService.addCart(note, item).subscribe(() => {
                    this.form.reset();
                    this.modalService.open(
                        'Cart Saved!!',
                        'Please, continue'
                    );
                });
            }
        }
    }
