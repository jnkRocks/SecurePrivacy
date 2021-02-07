import { Injectable } from '@angular/core';
import { WebApi } from '../models/web-api';
@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor() { }

  webApi: WebApi;

  generateInternalWebApiUrl(apiUrl: string): string {
    return this.webApi.serverUrl + apiUrl;
  }
}
