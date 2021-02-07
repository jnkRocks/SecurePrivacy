import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiListService {

  constructor() { }

  cookieBannerApi = '/api/common/getBanner';

}
