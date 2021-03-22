import { HomeComponent } from './home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SfMainComponent } from './sf-main/sf-main.component';
import { SfStationComponent } from './sf-station/sf-station.component';
import { SettingDeviceComponent } from './setting-device/setting-device.component';

const routes: Routes = [
  {
    path: 'dashboard',

    component: DashboardComponent,
    // loadChildren: () =>
    //   import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  //{ path: 'dashboard', component: DashboardComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'mainFarm', component: SfMainComponent },
  { path: 'mainWT', component: SfMainComponent },

  { path: 'station', component: SfStationComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'setting', component: SettingDeviceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
