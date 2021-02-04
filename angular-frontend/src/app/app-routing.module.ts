import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyComponent } from './company/company.component';

import { Routes, RouterModule } from '@angular/router';
import { EditCompanyComponent } from './edit-company/edit-company.component';


const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: 'companies', component: CompanyComponent },
  { path: 'add', component: AddCompanyComponent },
  { path: 'update/:id', component: EditCompanyComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
