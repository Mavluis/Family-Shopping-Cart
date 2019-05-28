import { Component, OnInit, ViewChild } from '@angular/core';
import { FriendService } from 'src/app/core/services/friend.service';
import { fromEvent } from 'rxjs';
import { debounceTime, map, filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'sn-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchText') inputElement;

  constructor(public friendsService: FriendService) { }

  ngOnInit() {
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        map((event: any) => event.target.value),
        filter(text => text.length > 3),
        distinctUntilChanged()
      )
      .subscribe(data => {
        this.friendsService.search(data).subscribe();
      });
  }

  // searchUsers(event) {
  //   if (event.which === 13 && event.target.value.length > 3) {
  //     this.friendsService.search(event.target.value).subscribe();
  //   }
  // }
}
