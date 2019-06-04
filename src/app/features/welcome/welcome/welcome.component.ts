import { Component } from '@angular/core';

@Component({
  selector: 'sn-welcome',
  templateUrl: './welcome.component.html',
  styles: [`
  section {
    padding: 2rem;
  }`]
})

export class WelcomeComponent {
  heroItems: HeroItem[] = [
    {
      id: 1,
      icon: 'fa fa-list',
      message: 'Make your shopping list'
    },
    {
      id: 2,
      icon: 'fa fa-users',
      message: 'Your family can also'
    },
    {
      id: 3,
      icon: 'fa fa-cloud-upload-alt',
      message: "You won't forget anything!"
    }
  ];
}
