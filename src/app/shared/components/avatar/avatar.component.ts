import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SocialNetworkUser } from '../../../core/core.models';

@Component({
  selector: 'sn-avatar',
  template: `
    <img
      class="img-responsive rounded-circle"
      *ngIf="imageUrl"
      [src]="imageUrl"
      [ngStyle]="{ width: width, height: height, 'min-width': width }"
    />
  `
})
export class AvatarComponent implements OnChanges {
  imageUrl = '';

  @Input() user: SocialNetworkUser;
  @Input() width = 'auto';
  @Input() height = 'auto';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user && changes.user.currentValue.avatarUrl !== undefined) {
      this.imageUrl =
        changes.user.currentValue.avatarUrl ||
        `https://api.adorable.io/avatars/128/${changes.user.currentValue.uuid}`;
    }
  }
}
