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
        "Yogourt",
        "Butter",
        "ColdCuts",
        "Eggs",
        "Eggplant",
        "Macaroni",
        "Mushrooms",
        "Olives",
        "Sausages",
        "Spaghetti",
        "Squash",
        "Apples",
        "Celery",
        "CleaningSupplies",
        "Melon",
        "Onions",
        "ParchmentPaper",
        "Pears",
        "Pizza",
        "Strawberries",
        "Zucchini",
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

        this.form = this.fb.group({
            note: [""],
            checkboxes: this.fb.group({})
        });

        this.items.forEach(item => {
            const abstractControl : AbstractControl = this.form.get("checkboxes");
            if(abstractControl instanceof FormGroup){
            (<FormGroup>abstractControl).addControl(item, new FormControl(false));
        }});
    }

    addCart() {
        console.log(this.form.value);
        
        const { note, items } = this.form.value;

        if (this.form.valid) {
            this.cartService.addCart(note, items).subscribe(() => {
                this.form.reset();
                this.modalService.open(
                    'Cart Saved!!',
                    'Please, continue'
                );
            });
        }
    }
}
