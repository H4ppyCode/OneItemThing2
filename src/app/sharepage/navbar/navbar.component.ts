import { Component } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: unknown = false;

  constructor(private localStorage: LocalStorage) {}

  ngOnInit(): void {
    this.localStorage.getItem<boolean>('isLoggedIn').subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn || false;
    });
  }

  logout(): void {
    this.localStorage.setItem('isLoggedIn', false).subscribe(() => {
      this.isLoggedIn = false;
      console.log('Logged out');
    });
  }
}
