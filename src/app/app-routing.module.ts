import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './components/common/init/init.component';

const routes: Routes = [
  { path: 'init', component: InitComponent },
  {
    path: 'user',
    loadChildren: './components/user/user.module#UserModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
