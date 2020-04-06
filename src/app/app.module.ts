import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { CreateComponent } from './people/create/create.component';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PeopleListComponent,
    CreateComponent,
    PeopleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
