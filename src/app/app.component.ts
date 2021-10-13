import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.sevice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'task-djinni-login';
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.autoLogin();
  }
}
