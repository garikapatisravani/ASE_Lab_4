import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  textpositive: any;
  textnegative: any;
  search: any;
  searchData = [];
  searchWord: any;
  searchName: any;
  link: string;
  text = [];
  searchUrl: any;
  ImageBoo: any;

  constructor(public navCtrl: NavController, private http: HttpClient) {

  }


  getInfo() {
    this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + this.searchWord +
      '&key=AIzaSyArk-sLEafLMbApLSDsvVVQU-biIG78MoU&limit=1&indent=True').subscribe((data: any) => {
        this.searchName = data.itemListElement[0].result.name;
        this.searchUrl = data.itemListElement[0].result.detailedDescription.articleBody;

      });

  }

  classify() {

    this.http.get("Https://cors-anywhere.herokuapp.com/https://api.uclassify.com/v1/uClassify/Sentiment/classify/?readKey=P9JSNTDb6kvj&text=" + this.search).subscribe((data: any) => {
      {
        this.textpositive = data.positive,
          this.textnegative = data.negative
        console.log(this.textpositive);
      }
    })



  }


}
