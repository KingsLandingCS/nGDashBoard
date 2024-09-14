import { Routes } from '@angular/router';
import { TableComponent } from './admin-portal/admin-components/table/table.component';
import { BillingComponent } from './admin-portal/admin-components/billing/billing.component';
import { VirtualRealityComponent } from './admin-portal/admin-components/virtual-reality/virtual-reality.component';
import { NotificationComponent } from './admin-portal/admin-components/notification/notification.component';
import { ProfileComponent } from './admin-portal/admin-components/profile/profile.component';
import { DashboardComponent } from './admin-portal/admin-components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'table', component: TableComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'virtual-reality', component: VirtualRealityComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'profile', component: ProfileComponent },
];
