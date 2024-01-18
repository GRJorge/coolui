import { Component, Input } from '@angular/core';

@Component({
    selector: 'notification',
    standalone: true,
    imports: [],
    templateUrl: './notification.component.html',
    styleUrl: './notification.component.css',
})
export class NotificationComponent {
    @Input() msj!: string;
    @Input() icon?: string;
    @Input() variant = 'error';
}
