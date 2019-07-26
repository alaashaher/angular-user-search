import { Injectable } from '@angular/core';
import { LoadingProvider } from './providers/loading-provider';
import { Searchuser } from './providers/http-services/user-service';

@Injectable()
export class UserSearchProvider {
    userData: [];
    FilterArray: any = [];
    constructor(
        private loadingProvider: LoadingProvider,
        private searchuser: Searchuser,
    ) {
    }

    SearchProducts(userName) {
        this.StartServiceLoading();
        this.searchuser.SearchUser().subscribe(
            data => {
                this.StopServiceLoading();
                console.log(userName.length);
                if (userName.length !== 0) {
                    this.userData = data.results;
                    let DATA: any;
                    DATA = this.userData;
                    this.FilterArray = DATA.filter(user => user.name.startsWith(userName));
                    console.log(this.FilterArray);
                } else {
                    this.FilterArray = [];
                }
            }, error => {
                this.HandleErrorCodeAndStopServiceLoading(error.error.errorCode, error.error.message);
            }
        );
    }

    private StartServiceLoading() {
        this.loadingProvider.ViewHttpServiceLoading();
    }
    private StopServiceLoading() {
        this.loadingProvider.CloseHttpServiceLoading();
    }

    private HandleErrorCodeAndStopServiceLoading(ErrorCode, ErrorMessage) {
        this.loadingProvider.CloseHttpServiceLoading();
    }

}
