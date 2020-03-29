import { Component } from '@angular/core';

@Component({
  selector: 'sn-welcome',
  templateUrl: './welcome.component.html',
  styles: []
})

export class WelcomeComponent {
  heroItems: HeroItem[] = [
    {
      id: 1,
      icon: 'fa fa-list',
      message: 'Haz tu lista de la compra.'
    },
    {
      id: 2,
      icon: 'fa fa-users',
      message: 'Tu familia también puede hacerla.'
    },
    {
      id: 3,
      icon: 'fa fa-cloud-upload-alt',
      message: "No te olvidarás de nada!!!."
    }
  ];
}
