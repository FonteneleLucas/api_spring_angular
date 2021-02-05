import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AppRoutingModule } from './app-routing.module';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    AddCompanyComponent,
    EditCompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
