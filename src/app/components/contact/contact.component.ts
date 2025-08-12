import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;
  
  formData: ContactForm = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  };
  
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSubmitting = true;
      this.showSuccessMessage = false;
      this.showErrorMessage = false;
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        
        // Reset form
        form.reset();
        this.formData = {
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
          projectType: ''
        };
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
        
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
    }
  }
}