import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sn-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  description = `I'm a full stack developer. 
  You can see in my social networks more information about me:`;
  contact = {
    description: 'If you want to contact with me, please can send me an email to:',
    mail: 'mavluis@gmail.com',
    firm: '® Luis Fernández Martínez © 2019'
  };
}
