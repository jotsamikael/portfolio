import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DesignComponent } from './design/design.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { LandingComponent } from './landing/landing.component';
import { ReviewComponent } from './review/review.component';
import { ServicesComponent } from './services/services.component';
import { VideoComponent } from './video/video.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { DataVisualisationComponent } from './data-visualisation/data-visualisation.component';

const routes: Routes = [
  {
    path: '',

    component: LandingComponent,

  },
  {
    path: 'home',

    component: LandingComponent,

  },
  {
    path: 'about',

    component: AboutComponent,

  },
  {
    path: 'fullstack',

    component: FullstackComponent,

  },
  {
    path: 'wordpress',

    component: WordpressComponent,

  },
  {
    path: 'video',

    component: VideoComponent,

  },
  {
    path: 'whatsapp',

    component: WhatsappComponent,

  },
  {
    path: 'data-visualisation',

    component: DataVisualisationComponent,

  },
  {
    path: 'design',

    component: DesignComponent,

  },
  {
    path: 'services',

    component: ServicesComponent,

  },
  {
    path: 'blog',

    component: BlogComponent,

  },
  {
    path: 'review',

    component: ReviewComponent,

  },
  {
    path: 'contact',

    component: ContactComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
