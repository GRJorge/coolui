import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationComponent } from '../../notification/notification.component';

@Component({
    selector: 'basic',
    standalone: true,
    imports: [NotificationComponent, ReactiveFormsModule],
    templateUrl: './basic.component.html',
    styleUrl: './basic.component.css',
})
export class BasicComponent {
    passwordModel?: string;
    confirmPasswordModel?: string;

    formGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', Validators.required),
    });

    getControl(name: string): AbstractControl {
        return this.formGroup.get(name)!;
    }
    getControlError(name: string, error: string): boolean {
        return this.formGroup.get(name)!.errors?.[error];
    }
}
