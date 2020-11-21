import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader';
import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/projects/gallery.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { PhotoshopComponent } from './components/photoshop/photoshop.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#d09c91',
  bgsOpacity: 0.7,
  bgsPosition: 'center-center',
  bgsSize: 60,
  bgsType: 'folding-cube',
  blur: 0,
  delay: 0,
  fgsColor: '#d09c91',
  fgsPosition: 'center-center',
  fgsSize: 110,
  fgsType: 'folding-cube',
  gap: 20,
  logoPosition: 'bottom-right',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgb(255,255,255)',
  pbColor: '#d09c91',
  pbDirection: 'ltr',
  pbThickness: 4,
  hasProgressBar: true,
  maxTime: -1,
  minTime: 500
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GalleryComponent,
    ProjectDetailsComponent,
    SkillsComponent,
    ResumeComponent,
    ContactComponent,
    PhotoshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    LightboxModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
