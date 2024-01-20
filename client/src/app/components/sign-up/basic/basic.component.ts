import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationComponent } from '../../notification/notification.component';
import { Router } from '@angular/router';
import { UserBasicData } from '../../../interfaces/user';

@Component({
    selector: 'basic',
    standalone: true,
    imports: [NotificationComponent, ReactiveFormsModule],
    templateUrl: './basic.component.html',
    styleUrl: './basic.component.css',
})
export class BasicComponent {
    router = new Router();

    emailModel!: string;
    passwordModel!: string;
    confirmPasswordModel!: string;

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

    @Output() sendData = new EventEmitter<UserBasicData>();

    submitForm(): void {
        this.sendData.emit({ email: this.emailModel, password: this.passwordModel });
    }
    returnMain(): void {
        this.router.navigate(['/']);
    }
}
