import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
   { path: 'list', component: ListComponent},
   { path: 'add', component: AddComponent},
   { path: 'detail/:id', component: DetailComponent},
    { path: 'search', component: SearchComponent},
   { path: '**', pathMatch: 'full', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
