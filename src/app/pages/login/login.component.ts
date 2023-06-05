import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoggedIn: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const emailControl = this.loginForm.get('email');
      const passwordControl = this.loginForm.get('password');

      if (emailControl && passwordControl) {

        const email = emailControl.value;
        const password = passwordControl.value;

        if (email === 'email@example.com' && password === 'password') {
          this.isLoggedIn = true;
          console.log('Connexion réussie!');
          alert("connexion réussie")
        } else {
          this.isLoggedIn = false;
          console.log('Identifiants invalides.');
        }

        console.log('Email:', email);
        console.log('Mot de passe:', password);
      }
    }
  }
}
