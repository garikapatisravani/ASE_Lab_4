import { HomePage } from "./../home/home";
import { Component } from "@angular/core";
import { AlertController, NavController } from "ionic-angular";

@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  existingNames;
  fname: string = "";
  lname: string = "";
  uname: string = "";
  password: string = "";

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) {}

  Signup() {
    console.log("entered data.....", this.fname);
    if (
      this.fname == "" ||
      this.lname == "" ||
      this.uname == "" ||
      this.password == ""
    ) {
      var alert = this.alertCtrl.create({
        title: "Error Message",
        subTitle: "Please Enter valid data",
        buttons: ["ok"]
      });
      alert.present();
    } else {
      let user = {
        fname: this.fname,
        lname: this.lname,
        uname: this.uname,
        password: this.password
      };

      localStorage.setItem(`userData-` + this.uname, JSON.stringify(user));
      this.navCtrl.push(HomePage);
    }
  }
}
