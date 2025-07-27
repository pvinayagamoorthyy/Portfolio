import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

// Add this import for EmailJS
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  sent = false;

  sendMessage() {
    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      message: this.message
    };

    emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      templateParams,
      environment.emailjs.userId
    ).then(
      () => {
        this.sent = true;
        setTimeout(() => {
          this.sent = false;
          this.name = '';
          this.email = '';
          this.message = '';
        }, 3000);
      },
      () => {
        alert('Failed to send message. Please try again later.');
      }
    );
  }
}
