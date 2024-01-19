import { Component } from '@angular/core';
import { BasicComponent } from './basic/basic.component';
import { UsernameComponent } from './username/username.component';
import { LogoComponent } from '../logo/logo.component';
import { User } from '../../interfaces/user';

@Component({
    selector: 'app-sign-up',
    standalone: true,
    imports: [BasicComponent, UsernameComponent, LogoComponent],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
    numForm = 0;

    newUser: User = {
        username: '',
        email: '',
        password: '',
        picture: 'default.jpg',
    };

    nextForm(): void {
        this.numForm += 1;

        if (this.numForm > 1) {
            alert('Save user in DB');
        }
    }
    previousForm(): void {
        this.numForm -= 1;
    }

    receiveBasicData(data: string[]) {
        this.newUser.username = data[0];
        this.newUser.email = data[1];

        this.nextForm();
    }

    receiveUsername(username: string) {
        this.newUser.username = username;

        this.nextForm();
    }
}
