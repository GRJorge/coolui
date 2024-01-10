import { Component } from '@angular/core';
import { BasicComponent } from './basic/basic.component';
import { UsernameComponent } from './username/username.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [BasicComponent, UsernameComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
