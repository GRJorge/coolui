import { Component, inject } from '@angular/core';
import { BasicComponent } from './basic/basic.component';
import { UsernameComponent } from './username/username.component';
import { LogoComponent } from '../logo/logo.component';
import { User, UserBasicData } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-sign-up',
    standalone: true,
    imports: [BasicComponent, UsernameComponent, LogoComponent],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
    userService = inject(UserService);

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
            this.userService.newUser(this.newUser).subscribe();
        }
    }
    previousForm(): void {
        this.numForm -= 1;
    }

    receiveBasicData(data: UserBasicData) {
        this.newUser.email = data.email;
        this.newUser.username = data.password;

        this.nextForm();
    }

    receiveUsername(username: string) {
        this.newUser.username = username;

        this.nextForm();
    }
}
