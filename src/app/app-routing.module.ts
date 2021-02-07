import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './features/components/settings/settings.component';

const routes: Routes = [
  {path: '' , redirectTo: 'settings', pathMatch: 'full'},
 {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
