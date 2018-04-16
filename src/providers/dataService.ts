import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

    constructor(public http: Http) {
    }

    getData(url: string) {
        return this.http.get(url)
            .map(res => res.json())
            .toPromise()
            .catch(this.handleError);

    }

    private handleError(err) {
        let errMessage: string;
        errMessage = err.msg ? err.msg : err.toString();
        console.log('GLOBAL ERR');
        return Promise.reject(errMessage);
    }

}
