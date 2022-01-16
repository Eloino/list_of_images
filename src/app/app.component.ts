import { Component } from '@angular/core';
import { generateJson } from './utils/jsonGenerator';
import { ItemList } from './model/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public numOfelements = 4000;

  public list: ItemList[] = [];
  public listFiltered: ItemList[] = [];

 constructor( ) { 
   this.generateJson(this.numOfelements);
 }

 private generateJson(numOfElelement: number):any {
this.list = generateJson(numOfElelement, 100, 100);
}

public setFilterData(e:any) {
  this.listFiltered = e;
}

}
