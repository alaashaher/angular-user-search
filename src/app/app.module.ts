import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSearchProvider } from './app-provider';
import { LoadingProvider } from './providers/loading-provider';
import {FormsModule} from '@angular/forms';
import { Searchuser } from './providers/http-services/user-service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeaderService } from './providers/header';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

// import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule
    // DragDropModule
  ],
  providers: [UserSearchProvider, LoadingProvider, Searchuser, HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
