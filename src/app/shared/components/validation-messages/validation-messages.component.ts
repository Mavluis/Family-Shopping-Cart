import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sn-validation-messages',
  templateUrl: './validation-messages.component.html'
})
export class ValidationMessagesComponent {
  @Input() control: FormControl;
  @Input() group: FormGroup;
}
