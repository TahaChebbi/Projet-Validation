import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { LoginComponent } from './components/login/login.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';


const routes: Routes = [
  //http://localhost:4200
  {path:"",component :HomeComponent},
  //http://localhost:4200/signup
  {path:"signup",component :SignupComponent},
  //http://localhost:4200/admin-signup
  {path:"admin-signup",component :SignupAdminComponent},
  //http://localhost:4200/login
  {path:"login",component :LoginComponent},
  //http://localhost:4200/admin-login
  {path:"admin-login",component :LoginAdminComponent},
  //http://localhost:4200/admin-dashboard
  {path:"admin-dashboard",component :AdminDashboardComponent},
  //http://localhost:4200/teacher-dashboard
  {path:"teacher-dashboard",component :TeacherDashboardComponent},
  //http://localhost:4200/student-dashboard
  {path:"student-dashboard",component :StudentDashboardComponent},
  //http://localhost:4200/student-dashboard
  {path:"students-list",component :StudentsTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
