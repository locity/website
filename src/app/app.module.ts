import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { CellComponent } from './cell/cell.component';
import { MetaComponent } from './meta/meta.component';
import { LogoComponent } from './logo/logo.component';
import { ContactComponent } from './cell/contact/contact.component';
import { ImprintComponent } from './cell/imprint/imprint.component';
import { MarcoLehmannComponent } from './cell/marco-lehmann/marco-lehmann.component';
import { TobiasKroghComponent } from './cell/tobias-krogh/tobias-krogh.component';
import { DefaultComponent } from './cell/default/default.component';
import { ServicesComponent } from './cell/services/services.component';
import { DigitalTransformationComponent } from './cell/digital-transformation/digital-transformation.component';
import { DevelopmentComponent } from './cell/development/development.component';
import { FrontendSecurityComponent } from './cell/frontend-security/frontend-security.component';
import { DigitalAnalyticsComponent } from './cell/digital-analytics/digital-analytics.component';
import { SeoComponent } from './cell/seo/seo.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CellComponent,
    MetaComponent,
    LogoComponent,
    ContactComponent,
    ImprintComponent,
    MarcoLehmannComponent,
    TobiasKroghComponent,
    DefaultComponent,
    ServicesComponent,
    DigitalTransformationComponent,
    DevelopmentComponent,
    FrontendSecurityComponent,
    DigitalAnalyticsComponent,
    SeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
