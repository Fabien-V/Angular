import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DisplayGuestsDirective } from './display-guests.directive';
import { HighLightDirective } from './highlight.directive';
import { FirstelementDirective } from './firstelement.directive';
import { ShowlistDirective } from './showlist.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    DisplayGuestsDirective,
    HighLightDirective,
    FirstelementDirective,
    ShowlistDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
