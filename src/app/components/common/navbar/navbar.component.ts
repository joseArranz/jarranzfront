import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang("en");
  }
  switchLanguage(language: string) {
    this.translateService.use(language);
  }
  ngOnInit() {}
}
