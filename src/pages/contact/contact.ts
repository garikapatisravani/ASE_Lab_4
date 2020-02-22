import { ClassifyService } from './../../app/services/classify.service';
import { GoogleSearchService } from "./../../app/services/google-search.service";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-contact",
  templateUrl: "contact.html"
})
export class ContactPage {
  inputValue: string;
  inputText: string;
  googleResult;
  classifyResult;
  isGoogleApi: boolean = false;
  isClassify: boolean = false;

  constructor(
    public navCtrl: NavController,
    private googleService: GoogleSearchService,
    private classifyService: ClassifyService
  ) {}

  search() {
    let value = this.inputValue;
    this.googleService.getDetails(value).subscribe(data => {
      console.log("result value.......", data);
      if (data) {
        this.googleResult = data.itemListElement[0].result;
      }
    });
  }

  classify() {
    let value = this.inputText;
    this.classifyService.getClassify(value).subscribe(data => {
      console.log("Classify value.......", data);
      if (data) {
        this.classifyResult = data;
      }
    });
  }

  openGoogleApi() {
    this.isGoogleApi = true;
    this.isClassify = false;
  }

  openClassify() {
    this.isClassify = true;
    this.isGoogleApi = false;
  }

}
