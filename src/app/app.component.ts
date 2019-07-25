import { Component } from '@angular/core';
import { UserSearchProvider } from './app-provider';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-people';
  userName: any;
  FilterArray: any;
  constructor(
    private userSearchProvider: UserSearchProvider,
  ) { }
  getResult(event: any) {
    console.log(this.userName);
    this.userSearchProvider.SearchProducts(this.userName);
    // this.FilterArray = this.userSearchProvider.userData.filter(user => {console.log(user)}
    // );
    // console.log('aaaaaaaa', this.userSearchProvider.userData);
  }
}
