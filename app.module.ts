import { HttpClientModule } from '@angular/common/http';
import { NewCasePipe } from './titlecase/newcase.pipe';
import { SummaryPipe } from './summary.pipe';
import { CourseService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { PostsComponent } from './posts/posts.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    NewCasePipe,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    FavouriteComponent,
    TitlecaseComponent,
    BootstrapPanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    ReactiveComponent,
    CourseFormComponent,
    PostsComponent,
    NewCourseFormComponent,
    NavbarComponent,
    PasswordFormComponent // child component

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    PostsService
  ], // collection of the services/dependency
  bootstrap: [AppComponent] // tells Angular it is the main component
})

export class AppModule { }
