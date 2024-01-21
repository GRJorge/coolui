import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
    selector: 'loading',
    standalone: true,
    imports: [LogoComponent],
    templateUrl: './loading.component.html',
    styleUrl: './loading.component.css',
})
export class LoadingComponent {}
