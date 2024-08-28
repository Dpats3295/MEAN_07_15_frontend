import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { map, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  registrationForm!: FormGroup;

  submitted: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)], this.usernameExistValidator.bind(this)),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl(''),
      preferredContactMethod: new FormControl('email', [Validators.required])
    }, this.passwordMatchValidator);

    this.onPreferredContactMethodChange();
  }

  get formControls() {
    return this.registrationForm.controls;
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {passwordMismatch: true};
  }

  onPreferredContactMethodChange(){
    this.registrationForm.get('preferredContactMethod')?.valueChanges.subscribe(value => {
      const phoneNumberControl = this.registrationForm.get('phoneNumber');
      if (value === 'phone') {
        phoneNumberControl?.setValidators([Validators.required])
      } else {
        phoneNumberControl?.clearValidators();
      }
      phoneNumberControl?.updateValueAndValidity();
    })
  }

  usernameExistValidator(control: AbstractControl) {
    const username = control.value;
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/users?username=${username}`).pipe(
      map(users => (users.length > 0 ? {usernameTaken: true} : null)),
      catchError(() => of(null))
    );
  }

  onSubmit(){
    this.submitted = true;
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
      this.registrationForm.reset();
      this.submitted = false;
    }
  }

}
