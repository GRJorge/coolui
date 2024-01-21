import { Component, inject } from '@angular/core';
import { BasicComponent } from './basic/basic.component';
import { UsernameComponent } from './username/username.component';
import { LogoComponent } from '../general/logo/logo.component';
import { User, UserBasicData } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { NotificationComponent } from '../general/notification/notification.component';
import { LoadingComponent } from '../general/loading/loading.component';

@Component({
    selector: 'app-sign-up',
    standalone: true,
    imports: [BasicComponent, UsernameComponent, LogoComponent, NotificationComponent, LoadingComponent],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
    userService = inject(UserService);

    numForm = 0;
    duplicatedEmailError = false;
    duplicatedUsernameError = false;

    newUser: User = {
        username: '',
        email: '',
        password: '',
        picture: 'default.jpg',
    };

    nextForm(): void {
        this.numForm += 1;

        if (this.numForm > 1) {
            this.userService.newUser(this.newUser).subscribe({
                next: () => {
                    this.duplicatedEmailError = false
                    this.duplicatedUsernameError = false
                },
                error: (err) => {
                    if(err.status === 400){
                        if (err.error.dataError === 'email') {
                            this.duplicatedEmailError = true;
                            this.numForm = 0
                        } else {
                            this.duplicatedUsernameError = true;
                            this.numForm = 1
                        }
                    }
                },
            });
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
