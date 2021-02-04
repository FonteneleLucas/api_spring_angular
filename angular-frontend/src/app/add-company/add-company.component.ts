import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  company: Company = new Company();
  submitted = false;

  constructor(private companyService: CompanyService,
    private router: Router) { }

  ngOnInit() {
  }

  newCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }

  save() {
    this.companyService
    .createCompany(this.company).subscribe(data => {
      console.log(data)
      this.company = new Company();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/companies']);
  }

}
