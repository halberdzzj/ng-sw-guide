import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://swapi.co/api/';
  selectedCatalog: any;

  catalogs = [
    {
      name: 'CHARACTERS',
      value: 'people',
      image: 'characters'
    },
    {
      name: 'PLANETS',
      value: 'planets',
      image: 'planets'
    },
    {
      name: 'FILMS',
      value: 'films',
      image: 'films'
    },
    {
      name: 'SPECIES',
      value: 'species',
      image: 'species'
    },
    {
      name: 'VEHICLES',
      value: 'vehicles',
      image: 'vehicles'
    },
    {
      name: 'STARSHIPS',
      value: 'starships',
      image: 'starships'
    }
  ];

  getData(url) {
    return this.http.get(url).toPromise();
  }

  // getDetail() {
  //   return this.http.get(this.detailUrl).toPromise();
  // }
}
