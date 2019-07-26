import { Component } from '@angular/core';
import { UserSearchProvider } from './app-provider';
// import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }
}
