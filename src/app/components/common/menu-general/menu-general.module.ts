import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuGeneralRoutingModule } from './menu-general-routing.module';
import { MenuGeneralComponent } from './menu-general.component';

@NgModule({
  imports: [
    CommonModule,
    MenuGeneralRoutingModule
  ],
  declarations: [MenuGeneralComponent]
})
export class MenuGeneralModule { }
