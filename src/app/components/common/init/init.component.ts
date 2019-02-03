import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }

  ngOnInit() {
  }

}
