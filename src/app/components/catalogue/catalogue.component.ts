import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(public api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  showSubCatalog(ctg) {
    this.router.navigate([ctg]);
  }

  // test() {
  //   let m = "hello";
  //   this.router.navigate([m]);
  // }

}
