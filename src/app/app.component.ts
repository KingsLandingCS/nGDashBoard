import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./admin-portal/admin-components/dashboard/dashboard.component";
import { SidebarComponent } from "./admin-portal/sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { BillingComponent } from "./admin-portal/admin-components/billing/billing.component";
import { NotificationComponent } from "./admin-portal/admin-components/notification/notification.component";
import { ProfileComponent } from "./admin-portal/admin-components/profile/profile.component";
import { TableComponent } from "./admin-portal/admin-components/table/table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, SidebarComponent, HeaderComponent, BillingComponent, NotificationComponent, ProfileComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nGDashBoard';
}
