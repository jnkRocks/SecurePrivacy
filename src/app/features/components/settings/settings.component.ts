import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CookieSettingsComponent } from '../cookie-settings/cookie-settings.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  bsModalRef: BsModalRef;

  ngOnInit(): void {
  }

  showCookiePopup(): void {
    this.bsModalRef = this.modalService.show(CookieSettingsComponent,
      { class: 'cookie-settings-popup', backdrop: 'static' });
  }
}
