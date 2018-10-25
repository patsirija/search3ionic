import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DddepartmentPage } from '../dddepartment/dddepartment';

/**
 * Generated class for the DdepartmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ddepartment',
  templateUrl: 'ddepartment.html',
})
export class DdepartmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  dddepartment(){
    this.navCtrl.push(DddepartmentPage)
  }

  ddepartment(){
    this.navCtrl.push(DdepartmentPage)
  }

}
