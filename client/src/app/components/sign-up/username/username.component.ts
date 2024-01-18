import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationComponent } from '../../notification/notification.component';

@Component({
    selector: 'username-form',
    standalone: true,
    imports: [NotificationComponent, ReactiveFormsModule],
    templateUrl: './username.component.html',
    styleUrl: './username.component.css',
})
export class UsernameComponent {
    usernameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
}
