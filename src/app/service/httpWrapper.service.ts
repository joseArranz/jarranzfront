import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HttpWrapper {
  constructor(private httpClient: HttpClient) {}

  get(url: string, httpOptions: any) {
    return this.httpClient.get(url, httpOptions);
  }

  post(url: string, body: any, httpOptions: any) {
    console.log(httpOptions);
    return this.httpClient.post(url, body, httpOptions);
  }
  getHeadersOauth() {
    /* const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
        "Access-Control-Max-Age": "3600",
        "Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Authorization, Origin, Accept, Access-Control-Request-Method, Access-Control-Request-Headers"
      })
    }; */
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        Authorization: "Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0"
      })
    };    
    return httpOptions;
  }
  getHeadersToken(token: string) {
    const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          Authorization: "Bearer " + token
        })
      };
    return httpOptions;
  }
}
