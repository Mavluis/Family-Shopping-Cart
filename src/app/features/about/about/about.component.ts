import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sn-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  description = `Aplicación Web para la lista de la compra. 
  Puedes ver en mis redes sociales mas información sobre mi:`;
  contact = {
    description: 'Si quieres contactar conmigo, por favor tu puedes hacerlo al Email:',
    mail: 'support@familyshopcart.com',
    firm: '®FamilyShopCart ©2019'
  };
}
