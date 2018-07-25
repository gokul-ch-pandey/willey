import { Component } from '@angular/core';
import * as firebase from 'firebase';

import { AuthService, AlertService, UserService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = '';
  isAuthenticated = false;
  willeyImage: string;


  menuItems: Array<Object> = [
    {
      icon: 'description',
      title: 'Medium @gokulpandey',
      link: ''
    },
    {
      icon: 'archive',
      title: 'Published packages',
      link: ''
    },
    {
      icon: 'link',
      title: 'FOllow on Github',
      link: ''
    },
  ];

  constructor(
    public authService: AuthService,
    private alertService: AlertService,
    private userService: UserService
    ) {
      this.isAuthenticated = !this.authService.isAuthenticated(),
      this.willeyImage = '/assets/img/willey_text.png';
  }

  userUid() {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.uid;
  }

  userEmail() {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.email;
  }

  userName() {
    this.userService.getUserProfileInformation();
    return firebase.auth().currentUser.displayName;
  }

  onLogout() {
    this.authService.logout();
    this.alertService.showToaster('Logout succesful');
  }
}
