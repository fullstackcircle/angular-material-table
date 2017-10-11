import { Component } from '@angular/core';
import { DataSource } from "@angular/cdk/table";
import { Observable } from "rxjs/Observable";
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 constructor(public _dataservice:DataService){}
 
  displayedColumns = ['name', 'username', 'email'];
  dataSource = new ExampleDataSource(this._dataservice);
}

export class ExampleDataSource extends DataSource<any> {

   constructor (private _dataService:DataService)
   {super()}

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return this._dataService.get().map(data =>
      {
        return data;
      });
  }

  disconnect() {}
}
