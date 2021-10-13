import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.sevice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  isAuthenticated:boolean = false;
  private userSub: Subscription;

  constructor(
    // private dataStorageService: DataStorageService,
    private authServise: AuthService
  ) {}
  ngOnInit() {
    this.userSub = this.authServise.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  onLogout(){
    this.authServise.logout()
  }

  // onSaveData() {
  //   this.dataStorageService.storeRecipes();
  // }

  // onFetchData() {
  //   this.dataStorageService.fetchRecipes().subscribe();
  // }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
