import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UtilityService } from 'src/app/core/services/utility.service';
import { CookieBannerDetails } from '../../models/cookie-banner-details';
import { CookieBannerService } from '../../services/cookie-banner.service';

@Component({
  selector: 'app-cookie-settings',
  templateUrl: './cookie-settings.component.html',
  styleUrls: ['./cookie-settings.component.scss']
})
export class CookieSettingsComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, private cookieBannerService: CookieBannerService,
    private utilityService: UtilityService, private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  cookieBannerData: CookieBannerDetails;
  customizeCollapsed = true;
  cookieSpinner = 'cookieSpinner';

  ngOnInit(): void {
    this.getCookieBannerData();
  }

  getCookieBannerData(): void {
    this.spinner.show(this.cookieSpinner);
    this.cookieBannerService.getCookieBannerData().subscribe((res: CookieBannerDetails[]) => {
      this.spinner.hide(this.cookieSpinner);
      const result = this.utilityService.toCamel(res);
      this.cookieBannerData = result;
    }, error => {
      this.spinner.hide(this.cookieSpinner);
      console.log(error);
      this.toastr.error('Error getting banner data');
    });
  }

  saveSettings(acceptAll): void {
    this.spinner.show(this.cookieSpinner);
    this.cookieBannerService.saveSettings().subscribe(res => {
      // Added setTimeout to simulate API call and display spinner in UI for better user experience in POC apps.
      setTimeout(() => {
        this.spinner.hide(this.cookieSpinner);
        this.toastr.success('Saved Successfully');
      }, 300);
    }, error => {
      this.spinner.hide(this.cookieSpinner);
      console.log(error);
      this.toastr.error('Error saving data');
    });
  }
}
