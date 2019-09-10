import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { GroupNewsComponent } from './component/group-news/group-news.component';
import { ExecutiveStaffComponent } from './component/executive-staff/executive-staff.component';
import { TeacherStaffComponent } from './component/teacher-staff/teacher-staff.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { ContactInformationComponent } from './component/contact-information/contact-information.component';
import { ProfessorUserComponent } from './component/professor-user/professor-user.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'groups',
    component: GroupNewsComponent
  },
  {
    path:'executives',
    component: ExecutiveStaffComponent
  },
  {
    path:'teachers',
    component: TeacherStaffComponent
  },
  {
    path:'gallery',
    component: GalleryComponent
  },
  {
    path:'contact',
    component: ContactInformationComponent
  },
  {
    path:'users',
    component: UserLoginComponent
  },
  {
    path:'professor',
    component:ProfessorUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
