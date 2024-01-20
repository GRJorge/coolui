import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private http = inject(HttpClient)
    private url = 'http://localhost:3000/user/';

    newUser(user: User) {
        return this.http.post(this.url + 'new', user);
    }
}
