import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { GroupNewsComponent } from './component/group-news/group-news.component';
import { ExecutiveStaffComponent } from './component/executive-staff/executive-staff.component';
import { TeacherStaffComponent } from './component/teacher-staff/teacher-staff.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { ContactInformationComponent } from './component/contact-information/contact-information.component';
import { ProfessorUserComponent } from './component/professor/professor-user/professor-user.component';
import { AdminUserComponent } from './component/admin/admin-user/admin-user.component';
import { CreateProfessorComponent } from './component/admin/create-professor/create-professor.component';
import { CreateSupervisorComponent } from './component/admin/create-supervisor/create-supervisor.component';
import { ExecutiveCrudComponent } from './component/admin/executive-crud/executive-crud.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'groups',
    component: GroupNewsComponent
  },
  {
    path: 'executives',
    component: ExecutiveStaffComponent
  },
  {
    path: 'teachers',
    component: TeacherStaffComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contact',
    component: ContactInformationComponent
  },
  {
    path: 'users',
    component: UserLoginComponent
  },
  {
    path: 'professor',
    component: ProfessorUserComponent
  },
  {
    path: 'admin',
    component: AdminUserComponent
  },
  {
    path: 'admin/create-professor',
    component: CreateProfessorComponent
  },
  {
    path: 'admin/create-supervisor',
    component: CreateSupervisorComponent
  },
  {
    path: 'admin/executive-crud',
    component: ExecutiveCrudComponent
  },
  {
    path: 'admin/new-executive',
    component: AdminUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
