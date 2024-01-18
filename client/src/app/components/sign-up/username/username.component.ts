import { Component, EventEmitter, Output } from '@angular/core';
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

    @Output() nextForm = new EventEmitter();
    @Output() previousForm = new EventEmitter();

    submitForm(event: Event) {
        event.preventDefault();

        this.nextForm.emit();
    }
    previousClicked() {
        this.previousForm.emit();
    }
}
