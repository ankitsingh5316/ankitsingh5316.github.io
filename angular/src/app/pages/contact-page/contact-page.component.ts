import { Component, OnInit } from '@angular/core';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { ClientsComponent } from '../../common/clients/clients.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { ContactService } from '../../services/contact.service';
import { ContactData } from '../../interfaces/contact.interfaces';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavbarOneComponent } from '../../common/navbar-one/navbar-one.component';
import { environment } from '../../environments/environment';
@Component({
    selector: 'app-contact-page',
    imports: [NavbarOneComponent, PageBannerComponent, ClientsComponent, FooterComponent, BackToTopComponent, CommonModule, ReactiveFormsModule],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent implements OnInit {
  contactData: ContactData | null = null;
  loading: boolean = false;
  error: boolean = false;
  contactForm: FormGroup;

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder,
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      msg_subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      domain: environment.baseUrl
    });
  }

  ngOnInit() {
    this.loadContactData();
  }

  private loadContactData(): void {
    this.loading = true;
    this.error = false;

    this.contactService.getContactData().subscribe({
      next: (data) => {
        this.contactData = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading contact data:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted with data:', this.contactForm.value);
      this.contactService.sendContactForm(this.contactForm.value).subscribe({
        next: (response:any) => {
          console.log('Form submitted successfully:', response);
          alert('Email sent successfully');
          this.contactForm.reset();
        },
        error: (err:any) => {
          console.error('Error submitting form:', err);
        }
      });
      this.contactForm.reset();
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Helper methods for template
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  getErrorMessage(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (!control) return '';
    
    if (control.hasError('required')) {
      return 'This field is required';
    }
    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control.hasError('minlength')) {
      const requiredLength = control.errors?.['minlength'].requiredLength;
      return `Minimum length is ${requiredLength} characters`;
    }
    if (control.hasError('pattern')) {
      if (fieldName === 'phone_number') {
        return 'Please enter a valid 10-digit phone number';
      }
    }
    return '';
  }
}