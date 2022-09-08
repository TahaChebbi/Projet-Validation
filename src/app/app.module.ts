import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { CoursesComponent } from './components/courses/courses.component';
import { BoxTeachingComponent } from './components/box-teaching/box-teaching.component';
import { TrendingCoursesComponent } from './components/trending-courses/trending-courses.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { LoginComponent } from './components/login/login.component';
import { RouterLink } from '@angular/router';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CoursesComponent,
    BoxTeachingComponent,
    TrendingCoursesComponent,
    ReviewsComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    SignupAdminComponent,
    LoginComponent,
    LoginAdminComponent,
    AdminDashboardComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent,
    StudentsTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
