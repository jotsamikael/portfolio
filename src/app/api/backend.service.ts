import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  API_URL = environment.BASE_URL

  constructor(private _http: HttpClient) { }

  public sendEmail(email: any) {
    return this._http.post(`${this.API_URL}/get-visitor-email`, email)
  }
}
