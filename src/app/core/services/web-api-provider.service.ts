import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebApi } from '../models/web-api';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root'
})
export class WebApiProviderService {

  constructor(private http: HttpClient, private webApiService: WebApiService) { }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('assets/webapi-config.json').subscribe((res: WebApi) => {
        this.webApiService.webApi = res;
        resolve(true);
      });
    });
  }
}
