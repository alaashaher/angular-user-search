import { Injectable } from '@angular/core';
import { map, timeout } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeaderService } from '../header';
@Injectable()
export class Searchuser {

  constructor(public http: HttpClient, private headerService: HeaderService
    ) { }

    // to call the API to get the data
  SearchUser(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://swapi.co/api/people/', { headers: this.headerService.getHeaderJson() })
      .pipe(timeout(40000), map(Response => {
        return Response;
      }));
  }


}
