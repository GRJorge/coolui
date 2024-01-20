import { Component, EventEmitter, Output, Input } from '@angular/core';
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
    @Input() showDuplicatedUsernameError = false

    usernameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
    usernameModel!: string

    @Output() previousForm = new EventEmitter();
    @Output() sendData = new EventEmitter<string>();

    submitForm(event: Event) {
        event.preventDefault();

        this.sendData.emit(this.usernameModel)
    }
    previousClicked() {
        this.previousForm.emit();
    }
}
