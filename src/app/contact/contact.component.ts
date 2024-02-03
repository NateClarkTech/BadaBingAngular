import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^[\d ()\-]+$/)]), //GPT for phone number validator
    message: new FormControl('', Validators.required),
  });

  submitForm() : void {
    //code to interact with a data base here
    alert("Thank you " + this.contactForm.value.firstName + " " + this.contactForm.value.lastName + " we will reach out shortly.");
    console.log(this.contactForm.value);
  }
}
