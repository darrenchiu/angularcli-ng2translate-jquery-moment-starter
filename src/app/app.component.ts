import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import * as moment from 'moment';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  time = moment().format('MMMM Do YYYY, h:mm:ss a');

  param: string = 'world';

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

  }

  ngAfterViewInit(){
    $('div').css('background-color', 'red');
  }
}
