import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoComponent } from './video/video.component';
import { DesignComponent } from './design/design.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ReviewComponent } from './review/review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataVisualisationComponent } from './data-visualisation/data-visualisation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    LandingComponent,
    FullstackComponent,
    WhatsappComponent,
    WordpressComponent,
    VideoComponent,
    DesignComponent,
    AboutComponent,
    BlogComponent,
    ReviewComponent,
    DataVisualisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
