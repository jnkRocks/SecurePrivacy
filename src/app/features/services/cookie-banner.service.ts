import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiListService } from 'src/app/core/services/api-list.service';
import { WebApiService } from 'src/app/core/services/web-api.service';

@Injectable({
  providedIn: 'root'
})
export class CookieBannerService {

  constructor(private http: HttpClient, private webApiService: WebApiService, private apiList: ApiListService) {
  }

  getCookieBannerData(): Observable<any> {
    const url = this.webApiService.generateInternalWebApiUrl(this.apiList.cookieBannerApi);
    return this.http.get(url);
  }

  saveSettings(): Observable<any> {
    return of(true);
  }
}
