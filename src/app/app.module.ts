import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './modules/home/home.component';
import { CoursesWorkshopsComponent } from './modules/courses-workshops/courses-workshops.component';
import { FreshNewsComponent } from './modules/fresh-news/fresh-news.component';
import { FormComponent } from './modules/form/form.component';

import { MarqueeComponent } from './components/marquee/marquee.component';
import { FooterComponent } from './modules/footer/footer.component';

import { MarqueeCheckComponent } from './components/marquee-check/marquee-check.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  
    HomeComponent,
    CoursesWorkshopsComponent,
    FreshNewsComponent,
    FormComponent,
    MarqueeComponent,
    FooterComponent,
    
    MarqueeCheckComponent,
 
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
