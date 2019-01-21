import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-catalogue',
  templateUrl: './sub-catalogue.component.html',
  styleUrls: ['./sub-catalogue.component.css']
})
export class SubCatalogueComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // const catalog = this.activatedRoute.snapshot.params.sub;
    const catalog = this.activatedRoute.snapshot.params.sub;

  }

}
