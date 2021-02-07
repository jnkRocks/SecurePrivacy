import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WebApiProviderService } from './core/services/web-api-provider.service';
import { SettingsComponent } from './features/components/settings/settings.component';
import { CookieSettingsComponent } from './features/components/cookie-settings/cookie-settings.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwitchComponent } from './shared/components/switch/switch.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    CookieSettingsComponent,
    SwitchComponent
  ],
  imports: [
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ModalModule.forRoot()
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: webApiProviderFactory, deps: [WebApiProviderService], multi: true },
    ToastrService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }


export function webApiProviderFactory(provider: WebApiProviderService) {
  return () => provider.load();
}
