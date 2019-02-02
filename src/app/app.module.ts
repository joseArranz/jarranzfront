import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/common/navbar/navbar.component";
import { MenuGeneralComponent } from "./components/common/menu-general/menu-general.component";
import { UserService } from "./service/user.service";
import { HttpWrapper } from "./service/httpWrapper.service";
import { HttpClientModule } from "@angular/common/http";
import { InitComponent } from './components/common/init/init.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MenuGeneralComponent, InitComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserService, HttpWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {}
