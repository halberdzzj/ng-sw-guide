import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { IEntity } from 'src/app/models/model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sub-catalogue',
  templateUrl: './sub-catalogue.component.html',
  styleUrls: ['./sub-catalogue.component.css']
})
export class SubCatalogueComponent implements OnInit {


  subUrl: string;
  dataResults: IEntity;
  type: any;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService,
    private router: Router, private locationCtrl: Location) {
    this.type = this.activatedRoute.snapshot.params.sub;
    this.subUrl = `${this.api.baseUrl}${this.type}`;
    this.loadData();
  }

  ngOnInit() {
    // const catalog = this.activatedRoute.snapshot.params.sub;
  }

  loadData() {
    this.api.getData(this.subUrl).then(data => {
      this.dataResults = data as IEntity;
      console.log(this.dataResults)
    }).catch((err) => {
      // console.log(err);
    });
  }

  goPre() {
    this.subUrl = this.dataResults.previous;
    this.loadData();
  }

  goNext() {
    this.subUrl = this.dataResults.next;
    this.loadData();
  }

  toDetails(url) {
    let splitArray = url.split('/');
    console.log(splitArray);
    let id = splitArray[splitArray.length - 2];
    this.router.navigate([this.type, id]);
  }

  goBack() {
    this.locationCtrl.back();
  }

}
