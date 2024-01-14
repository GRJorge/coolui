import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'basic',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './basic.component.html',
    styleUrl: './basic.component.css',
})
export class BasicComponent {
    formGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', Validators.required),
    });
}
