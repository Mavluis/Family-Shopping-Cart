import { Injectable } from '@angular/core';
import { SearchResult } from '../core.models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FriendService {
    searchResults: SearchResult[] = [];

    constructor(private http: HttpClient) { }

    search(text: string) {
        return this.http
            .get(`${environment.apiBaseUrl}/user/search`, {
                params: {
                    q: text
                }
            })
            .pipe(tap((results: SearchResult[]) => (this.searchResults = results)));
    }
}
