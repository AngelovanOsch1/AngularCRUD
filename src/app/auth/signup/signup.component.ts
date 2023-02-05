import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

interface formData {
  firstName: string
  lastName: string
  email: string
  password: string
  repeatPassword: string
  uid: number
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: formData = {
    uid: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: ''
  }

  constructor(private authService: AuthService) {

  }

  submit() {
    this.authService.signup(this.form)
  }
}
