import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuGeneralComponent } from './menu-general.component';

export const routes: Routes = [
  {
    path: "",
    component: MenuGeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuGeneralRoutingModule { }
