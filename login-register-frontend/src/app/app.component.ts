import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './services/auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  authority: string;
  info: any;

  constructor(private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.authority = 'user';
      return true;
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
