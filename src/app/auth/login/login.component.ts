import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

interface formData {
  email: string
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  form: formData = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {

  }

  submit() {
    this.authService.login(this.form)
  }
}
