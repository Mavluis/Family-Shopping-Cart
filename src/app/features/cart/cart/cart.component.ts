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
        'Agua', 
        'Arroz', 
        'Atun', 
        'Bastoncillos', 
        'Cafe', 
        'Cervezas', 
        'Champu', 
        'Chocolate', 
        'Detergente', 
        'Espaguetis'
    ];

    items1: string[] = [
        'Fiambre', 
        'Galletas', 
        'Garbanzos', 
        'Gel', 
        'Huevos', 
        'Kiwis', 
        'Leche', 
        'Lentejas', 
        'Macarrones', 
        'Mantequilla'
    ];

    items2: string[] = [
        'Manzanas', 
        'Mermelada', 
        'Naranjas', 
        'Nueces', 
        'Pan molde', 
        'Pan tostado', 
        'Papel(cocina)', 
        'Papel(WC)', 
        'Patatas', 
        'Patatas(bolsa)'
    ];

    items3: string[] = [
        'Peras', 
        'Pizzas', 
        'Platanos', 
        'Suavizante', 
        'Tomate(brick)', 
        'Tomates', 
        'Vino', 
        'Yogures', 
        'Zumos', 
        'Zumos(brick)'
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
            console.log(product);
            if (!products === false) {
                for (let i = 0; i < products.length; i++) {
                    if (product === products[i])
                        return true;
                }
            } else return false;
        };

        const initCheckboxForm = (item: string, itemsFromServer: string[]) => {
            const abstractControl: AbstractControl = this.form.get("checkboxes");
            const isToCheck = isPresent(item, itemsFromServer);
            if (abstractControl instanceof FormGroup) {
                (<FormGroup>abstractControl).addControl(item, new FormControl(isToCheck));
            }
        }

        this.form = new FormGroup({
            item: new FormControl()
        });

        this.cartService.getCart().subscribe((data: CartResponse) => {
            this.note = data.note;
            const itemsFromServer = data.products;

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

    /* Add and remove checks from products that are no longer wanted or are already 
    in the physical basket in the supermarket, also modify everything you want to put in Notes. */

    addCart() {

        const { note, checkboxes } = this.form.value;
        const namesboxes = Object.keys(checkboxes);
        const checkedItems = [];

        for (const name of namesboxes) {
            if (checkboxes[name]) {
                checkedItems.push(name);
            }
        }

        if (this.form.value) {
            this.cartService.addCart(note, checkedItems).subscribe(() => {
                this.modalService.open(
                    'Cesta de la Compra Guardada!!',
                    'Por favor, continua'
                );
            });
        }
    }
}
