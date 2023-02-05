import { Component, OnInit } from '@angular/core';
import { initializeApp } from '@firebase/app';
import { AuthService } from './auth/auth.service';
import { firebaseConfig} from './firebase.config';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
  auth = getAuth()

  constructor(private authServices: AuthService) {}
  ngOnInit(): void {
    initializeApp(firebaseConfig)
  }

  isAuth() {
    return this.authServices.isAuth
  }

  logout() {
    this.authServices.logout()
  }
}
