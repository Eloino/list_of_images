import { Component, Input, OnInit } from '@angular/core';
import { ItemList } from 'src/app/model/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

@Input() public listFiltered: ItemList[] = [];

  constructor() { 
    if ("loading" in HTMLImageElement.prototype) {
      console.log("El navegador soporta `lazy-loading`...");
    } else {
      console.log("`lazy-loading` no soportado...");
    }
  }

  ngOnInit(): void {
  }

  errorHandler(event: any) {
    event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
 }

}
