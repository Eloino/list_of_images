import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemList } from 'src/app/model/list';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() public list: ItemList[] = [];
  @Output() public filterData: EventEmitter<ItemList[]> = new EventEmitter();

  public formFilter: FormGroup;
  public filtered : ItemList[] = [];

  constructor(
    public formBuild: FormBuilder
  ) {
    this.formFilter = this.formBuild.group({
      id: [  ],
      text: [ '' ]
  });
  }

  ngOnInit(): void {
    this.filterData.emit(this.list);
      this.formFilter.statusChanges.subscribe(() => {
        const id = this.formFilter.value.id;
        const test = this.formFilter.value.text;
        setTimeout(() => {
          this.filterAnEmitData(id, test);
        }, 250);
      });
  }

  

  filterAnEmitData(id: number|null, text: string ):void {
    this.filtered = this.list.filter((ele)=> {      
      return ((ele.id === id) && ele.text.includes(text)) || (id === null && ele.text.includes(text))  || (id === null && text === '') ;
    });
    this.filterData.emit(this.filtered);
  }
}
