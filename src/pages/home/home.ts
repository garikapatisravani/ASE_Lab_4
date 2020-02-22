import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AboutPage} from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  uname: String;
  password: String;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  signIn() {
    let localData = JSON.parse(localStorage.getItem(`userData-`+this.uname));   
      // console.log('get the local data of user', JSON.parse(localStorage.getItem(`userData-`+this.loginForm.value.username)).pass);
      if (localData) {
        if (localData.password == this.password ) {
          var alert = this.alertCtrl.create({
            title: "Login Successfull!",
            subTitle: "Welcome" + " " + this.uname,
            buttons: ['ok']
    
          });
          alert.present();
          this.navCtrl.push(ContactPage);
       } else { 
        let alert = this.alertCtrl.create({
          title:"Login Failed",
          subTitle: "Please Enter Valid Credentials",
          buttons:['ok']
        });
        alert.present();
       }
  }
}
  register(){
    this.navCtrl.push(AboutPage);
  }

}
