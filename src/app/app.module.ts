import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ReactiveFormsModule } from '@angular/forms';
import { CryptApiComponent } from './crypt-api/crypt-api.component';
import { LeftDirective } from './crypt-api/left.directive';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
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
    LeftDirective,
    
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule ,HttpClientModule, NgChartsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
