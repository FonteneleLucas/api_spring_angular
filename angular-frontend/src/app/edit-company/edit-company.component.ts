import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  id: number;
  company: Company;

  constructor(private route: ActivatedRoute, private router: Router,
    private companyService: CompanyService) { }

  ngOnInit() {

    this.company = new Company();

    this.id = this.route.snapshot.params['id'];
    
    this.companyService.getCompany(this.id)
      .subscribe(data => {
        console.log(data)
        this.company = data;
      }, error => console.log(error));
  }

  updateCompany() {
    this.companyService.updateCompany(this.id, this.company)
      .subscribe(data => {
        console.log(data);
        this.company = new Company();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCompany();    
  }

  gotoList() {
    this.router.navigate(['/companies']);
  }

}
