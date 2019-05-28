import { Component } from '@angular/core';

@Component({
  selector: 'sn-header',
  template: `
    <nav class="navbar navbar-dark bg-primary justify-content-center">
      <a class="btn btn-primary" href="#" role="button">
        <i class="fas fa-cart-arrow-down"></i>
        FAMILY SHOPPING CART</a>
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
