import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private locationCtrl: Location) {
    this.paramData = this.activatedRoute.snapshot.params;

    if (this.paramData.sub == 'people') {
      this.imgSub = 'characters';
    } else {
      this.imgSub = this.paramData.sub;
    }
    this.imgSrc = `${this.imgBase}${this.imgSub}/${this.paramData.id}.jpg`;
    let url = `${this.api.baseUrl}${this.paramData.sub}/${this.paramData.id}`;
    this.api.getData(url).then(data => {
      this.info = data;
      if (this.paramData.sub == 'films') {
        this.commentTitle = this.info.title + '-comments';
      } else {
        this.commentTitle = this.info.name + '-comments';
      }
      this.comments = this.commentStorage.getItem(this.commentTitle);

    }).then(err => {
      // console.log(err);
    });
  }
  commentTitle: string;
  paramData: any;
  imgSub: any;
  info: any;
  imgBase: string = 'https://starwars-visualguide.com/assets/img/';
  imgSrc: string;
  newComment: string;
  comments: string;
  commentStorage = window.localStorage;
  ngOnInit() {
  }

  goBack() {
    this.locationCtrl.back();
  }

  addComment() {
    if (this.comments) {
      this.comments += `; ${this.newComment}`;
    } else {
      this.comments = this.newComment;
    }

    this.commentStorage.setItem(this.commentTitle, this.comments);
    this.newComment = '';
  }

}
