import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  constructor(public _http: Http) { }
  
    get(): Observable<any> {
        return this._http.get("https://jsonplaceholder.typicode.com/users")
         .map((response: Response) => <any>response.json())
        // .catch(this.handleError);
    }

}
