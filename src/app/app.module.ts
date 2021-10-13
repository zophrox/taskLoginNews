import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinerComponent } from './loading-spiner/loading-spiner.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    HomeComponent,
    NewsComponent,
    LoadingSpinerComponent,
    AuthComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
