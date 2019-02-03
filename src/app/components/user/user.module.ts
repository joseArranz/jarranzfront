import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { UserListComponent } from "./user-list/user-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatCheckboxModule,
  MatButtonModule,
  MatDialogModule
} from "@angular/material";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { UserCreateComponent } from "./user-create/user-create.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserDeleteComponent } from "./user-delete/user-delete.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserDetailComponent
  ],
  entryComponents: [
    UserCreateComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class UserModule {}
