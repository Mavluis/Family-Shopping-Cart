import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'sn-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent {
  constructor(public userService: UserService) {}
  @Output() publish = new EventEmitter();

  exploreKey(value) { }

  publishContent(value: string) {
    this.publish.emit(value);
  }
}

