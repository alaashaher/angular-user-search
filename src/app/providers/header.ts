import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeaderService {
    // the json that sends with the service that call the API
    getHeaderJson() {
        const contentHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return contentHeaders;
    }
}
