import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { CreateComponent } from './people/create/create.component';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';



const routes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: CreateComponent },
  { path: 'people/:id', component: PeopleDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
