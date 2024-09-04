import { Routes } from '@angular/router';
import { DashboardComponent } from './admin-portal/admin-components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'sidebar', component: DashboardComponent}
];
