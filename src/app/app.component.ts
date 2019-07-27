import { Component } from '@angular/core';
import { UserSearchProvider } from './app-provider';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

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
    // console.log(this.userName);
    let username: any;
    username = this.userName.toLowerCase();
    this.userSearchProvider.SearchProducts(username);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userSearchProvider.FilterArray, event.previousIndex, event.currentIndex);
  }

}
