import { Component, OnInit } from '@angular/core';
import { FriendRequestsService } from 'src/app/core/services/friend-request.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'sn-friend-requests',
  templateUrl: './friend.requests.component.html',
  styleUrls: ['./friend.requests.component.scss']
})
export class FriendRequestsComponent implements OnInit {
  constructor(
    public friendRequestService: FriendRequestsService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.friendRequestService.getFriendRequests().subscribe();
  }

  acceptFriend(friendRequest) {
    this.friendRequestService
      .acceptFriendRequest(friendRequest.uuid)
      .subscribe(() => {
        this.toastService.addToast({
          title: 'Hey!!',
          message: `Now you and ${friendRequest.fullName} are friends`,
          variant: 'primary'
        });
      });
  }
}

