import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { FriendRequest } from 'src/app/features/wall/wall.models';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FriendRequestsService {
    friendRequests: FriendRequest[] = [];

    constructor(private http: HttpClient) { }

    getFriendRequests() {
        return this.http.get(`${environment.apiBaseUrl}/user/friendrequests`).pipe(
            tap((friendsrequests: FriendRequest[]) => {
                this.friendRequests = friendsrequests.filter(
                    friendRequest => !friendRequest.request.confirmed
                );
            })
        );
    }

    acceptFriendRequest(uuid: string) {
        return this.http
            .post(`${environment.apiBaseUrl}/user/friendrequests/accept`, {
                uuid
            })
            .pipe(
                tap(() => {
                    this.friendRequests = this.friendRequests.filter(
                        friendRequest => friendRequest.uuid !== uuid
                    );
                })
            );
    }
}

