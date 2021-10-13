import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.sevice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  isAuthenticated:boolean = false;
  private userSub: Subscription;

  constructor(
    private authServise: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authServise.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
