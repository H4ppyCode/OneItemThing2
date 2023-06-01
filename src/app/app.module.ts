import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { HistoryComponent } from './pages/history/history.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthenticatorComponent } from './pages/authenticator/authenticator.component';
import { MiddleDirective } from './pages/item/middle.directive';
import { ListUsersComponent } from './pages/item/list-users/list-users.component';
import { LoginComponent } from './pages/login/login.component';
import { CryptApiComponent } from './crypt-api/crypt-api.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ItemComponent,
    HistoryComponent,
    AboutComponent,
    AuthenticatorComponent,
    MiddleDirective,
    ListUsersComponent,
    LoginComponent,
    CryptApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
