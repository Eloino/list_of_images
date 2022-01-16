import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule 
      ],
      declarations: [ FilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    component.list = [
      {id: 1, photo: 'urlstring', text: 'string1'},
      {id: 2, photo: 'urlstring', text: 'string2'}
    ];
  });

  it('(ele.id === id) && ele.text.includes(text)', () => {
    let id = 1;
    let text = 'st';
    component.filtered = [];
    component.filterAnEmitData(id, text);
    expect(component.filtered[0].id).toEqual(1);
  });

  it('(id === null && ele.text.includes(text))', () => {
    let id = null;
    let text = 'string1';
    component.filtered = [];
    component.filterAnEmitData(id,text);
    expect(component.filtered[0].id).toEqual(1);
  });

  it('(id === null && text === ""', () => {
    let id = null;
    let text = '';
    component.filtered = [];
    component.filterAnEmitData(id,text);
    expect(component.filtered.length).toEqual(2);
  });

});
