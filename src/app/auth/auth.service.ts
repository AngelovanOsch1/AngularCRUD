import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase.config';

interface formData {
  email: string
  password: string
}

interface signupData {
  firstName: string
  lastName: string
  email: string
  password: string
  uid: number
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false

  constructor(private router: Router) { }

  login(form: formData) {
    const auth = getAuth()
    
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then(() => {
     this.isAuth = true
     this.router.navigate([''])
    })
    .catch((error)=> {
     this.isAuth = false
    })
   }

  signup = async (form: signupData) => {
    const auth = getAuth()

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      )

      const userData = {
        uid: user.user.uid,
        firstname: form.firstName,
        lastname: form.lastName
      }

      await setDoc(doc(db, "users", user.user.uid), userData)
    } catch(error: any) {
      console.log(error.message)
    } finally {
      this.router.navigate(['login'])
    }
  }

  logout() { 
    const auth = getAuth()

    signOut(auth).then(() => {
      this.router.navigate(['login'])
      this.isAuth = false
      })
      .catch((error) => {
        
      })
  }  
}
