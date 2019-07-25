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
                this.userData = data.results;
                console.log('array data', this.userData);
                // this.FilterArray = this.userData.filter(user => user.name.include(userName));
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
