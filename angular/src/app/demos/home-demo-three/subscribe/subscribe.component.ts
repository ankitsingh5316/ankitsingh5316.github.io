import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../../services/contact.service';
import { environment } from '../../../environments/environment';
@Component({
    selector: 'app-subscribe',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './subscribe.component.html',
    styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent implements OnInit {
    inquiryForm!: FormGroup;

    constructor(private fb: FormBuilder,private service: ContactService) {}

    ngOnInit() {
        this.inquiryForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: [''],
            service: [''],
            message: [''],
            domain: environment.baseUrl
        });
    }

    onSubmit() {
        if (this.inquiryForm.valid) {
            console.log('Form submitted:', this.inquiryForm.value);
            this.service.sendContactForm(this.inquiryForm.value).subscribe((res:any)=>{
                console.log(res);
                alert('Inquiry sent successfully');
                this.inquiryForm.reset();
            },(err:any)=>{
                console.log(err);
            })
            // TODO: Add your form submission logic here
        } else {
            Object.keys(this.inquiryForm.controls).forEach(key => {
                const control = this.inquiryForm.get(key);
                if (control?.invalid) {
                    control.markAsTouched();
                }
            });
        }
    }
}