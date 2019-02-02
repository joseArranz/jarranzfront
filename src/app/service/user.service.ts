import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.model";
import { environment } from "../../environments/environment";
import { HttpWrapper } from "./httpWrapper.service";

@Injectable()
export class UserService {
  constructor(private httpWrapper: HttpWrapper) {}
  urlUsers: string = environment.API_ENDPOINT_USER;
  urlOauth: string = environment.API_ENDPOINT_OAUTH;

  async getUsers() {
    let token;
    let usersback;
    token = await this.httpWrapper
      .post(this.urlOauth, {}, this.httpWrapper.getHeadersOauth())
      .toPromise();
    usersback = await this.httpWrapper
      .get(this.urlUsers, this.httpWrapper.getHeadersToken(token.access_token))
      .toPromise();
    return usersback;
  }
}
