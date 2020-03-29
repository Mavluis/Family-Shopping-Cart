import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {
    this.route.queryParams.subscribe(params => {
      if (params.notification === 'account-activated') {
        this.modalService.open(
          // 'Account Activated!!',
          'Cuenta Activada!!',
          // 'Please, log in and enter your Shopping Cart!!!'
          'Por favor, inicia sesión y entra en tu cuenta Shopping Cart!!!'
        );
      } else if (params.notification === 'account-not-activated') {
        this.modalService.open(
          // 'Account Not Activated',
          'Cuenta NO Activada!!!',
          // 'Sorry we cannot activate your account'
          'Lo siento, no podemos activar tu cuenta, ponte en contacto con support@familyshopcart.com, gracias.'
        );
      }
    });
  }
}
