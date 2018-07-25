// Modules 3rd party
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
         MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
         MatCardModule, MatTabsModule, MatIconModule,MatGridListModule,MatExpansionModule,MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { MessagesModule } from './components/messages/messages.module';
import { PipesModule } from './pipes/pipes.module';
import { BlocksModule } from './components/blocks/blocks.module';
import { AuthModule } from './components/auth/auth.module';
import { BackgroundsModule } from './components/backgrounds/backgrounds.module';
import { ProfileModule } from './components/profile/profile.module';
import { MiscModule } from './components/misc/misc.module';
import { CoursesModule } from './components/courses/courses.module';

// Shared
import {
  FooterComponent,
  HeaderComponent,
  UserService,
  AlertService,
  AuthGuardService,
  AuthService,
  WindowService
} from './components/shared';

// Main
import { AppComponent } from './app.component';
import { AppRoutingModule,
         // routingComponents
         } from './app.routing';

// Other components
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { EmailMeComponent } from './components/email-me/email-me.component';
import { TestComponent } from './components/test/test.component';
import { GridComponent } from './components/courses/grid/grid.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    EmailMeComponent,
    TestComponent
    // routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
    MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
    MatCardModule, MatTabsModule, MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MessagesModule,
    PipesModule,
    BlocksModule,
    AuthModule,
    BackgroundsModule,
    ProfileModule,
    MiscModule,
    CoursesModule,MatGridListModule,MatExpansionModule,MatListModule
  ],
  providers: [
    UserService,
    AlertService,
    AuthGuardService,
    AuthService,
    WindowService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
