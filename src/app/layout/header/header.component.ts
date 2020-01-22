import { Component } from '@angular/core';

/* Component to create the header, where the name of the application 
makes you return to the main screen being fixed throughout the App. */

@Component({
  selector: 'sn-header',
  template: `
    <nav class="navbar navbar-dark bg-primary justify-content-center">
      <a class="btn btn-primary" href="#" role="button">
        <i class="fas fa-cart-arrow-down"></i>
        FAMILY SHOP CART</a>
    </nav>
  `,
  styles: [
    `
      nav, a {
        font-size: 1.5rem;
        font-family: 'Chelsea Market', cursive;
      }
    `
  ]
})
export class HeaderComponent { }
