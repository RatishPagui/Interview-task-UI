import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegionComponentComponent } from './region-component/region-component.component';
import { CompanyCompComponent } from './company-comp/company-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { PageCompComponent } from './page-comp/page-comp.component';
import { CourseCompComponent } from './course-comp/course-comp.component';
import { CourseCard1Component } from './course-card1/course-card1.component';
import { CourseCard2Component } from './course-card2/course-card2.component';
import { CourseCard3Component } from './course-card3/course-card3.component';
import { CourseCard4Component } from './course-card4/course-card4.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    RegionComponentComponent,
    CompanyCompComponent,
    FooterCompComponent,
    PageCompComponent,
    CourseCompComponent,
    CourseCard1Component,
    CourseCard2Component,
    CourseCard3Component,
    CourseCard4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
