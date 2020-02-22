import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassifyService {

  apikey = 'LllglFBF7vhQ';
  URL = 'https://api.uclassify.com/v1/uclassify/sentiment/classify?readkey=LllglFBF7vhQ&text=';
 
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.apikey,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    }),
  };
  constructor(private http: HttpClient) { }

  getClassify(text) {
     //return this.http.get('https://cors-anywhere.herokuapp.com/' + this.URL + text, this.httpOptions);
     return this.http.get('https://cors-anywhere.herokuapp.com/' + this.URL + text, this.httpOptions);
  }
}