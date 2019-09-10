import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactInformationComponent } from './component/contact-information/contact-information.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { FooterComponent } from './component/footer/footer.component';
import { FeedbackFormComponent } from './component/feedback-form/feedback-form.component';
import { HomeComponent } from './component/home/home.component';
import { HomeNewComponent } from './component/home-new/home-new.component';
import { GroupNewsComponent } from './component/group-news/group-news.component';
import { GroupNewComponent } from './component/group-new/group-new.component';
import { ExecutiveStaffComponent } from './component/executive-staff/executive-staff.component';
import { TeacherStaffComponent } from './component/teacher-staff/teacher-staff.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { ProfessorUserComponent } from './component/professor-user/professor-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactInformationComponent,
    NavigationComponent,
    FooterComponent,
    FeedbackFormComponent,
    HomeComponent,
    HomeNewComponent,
    GroupNewsComponent,
    GroupNewComponent,
    ExecutiveStaffComponent,
    TeacherStaffComponent,
    GalleryComponent,
    UserLoginComponent,
    ProfessorUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmHbK8wxJ6KS-fzKRBQIsTTSZkqxaGyks'
    })/* key de Google Maps */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
