import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatMenuModule, MatTreeModule
} from '@angular/material';
import {
  BidiModule
} from '@angular/cdk/bidi';
import {
  TestFormComponent
} from './test-form/test-form.component';
import {
  ReactiveFormsModule
} from '@angular/forms';
import {
  NavbarComponent
} from './navbar/navbar.component';
import {
  LayoutModule
} from '@angular/cdk/layout';
import {
  TestTableComponent
} from './test-table/test-table.component';
import {
  TestDashboardComponent
} from './test-dashboard/test-dashboard.component';
import { TestTreeComponent } from './test-tree/test-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    NavbarComponent,
    TestTableComponent,
    TestDashboardComponent,
    TestTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    BidiModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
