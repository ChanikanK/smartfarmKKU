import { SfStationComponent } from './page/sf-station/sf-station.component';
import { SfMainComponent } from './page/sf-main/sf-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: HomeComponent },
  { path: 'main', component: SfMainComponent },
  { path: 'station', component: SfStationComponent },
  {
    path: 'pages',
    loadChildren: () => import('./page/page.module').then((m) => m.PageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
