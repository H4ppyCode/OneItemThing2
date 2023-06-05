import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private localStorage: LocalStorage) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // @ts-ignore
      this.email = this.loginForm.get('email').value;
      // @ts-ignore
      this.password = this.loginForm.get('password').value;

      const credentials = { email: this.email, password: this.password };

      this.http.post('http://localhost:3000/login', credentials)
        .subscribe((response: any) => {
          if (response.success) {
            this.localStorage.setItem('isLoggedIn', true).subscribe(() => {
              console.log('Authentication successful');
            });
          } else {
            console.log('Invalid credentials');
          }
        });
    }
  }
}
