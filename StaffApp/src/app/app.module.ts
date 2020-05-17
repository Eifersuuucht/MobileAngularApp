import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentItemComponent } from './department-item/department-item.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';

const routes: Routes = [
  {path: 'departments', component: DepartmentListComponent},
  {path: 'workers/:departmentId', component: WorkerListComponent},
  {path: '', redirectTo: 'departments', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    DepartmentItemComponent,
    WorkerListComponent,
    DepartmentAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
