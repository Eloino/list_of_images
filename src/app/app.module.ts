import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { ListComponent } from './components/list/list.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { TitleComponent } from './components/title/title.component'

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ListComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
