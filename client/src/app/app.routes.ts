import { Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: 'signUp',
        title: 'Create account',
        component: SignUpComponent,
    },
];
