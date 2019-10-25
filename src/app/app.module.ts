import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ServiceWorkerModule } from '@angular/service-worker'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CellComponent } from './cell/cell.component'
import { ClientsComponent } from './cell/clients/clients.component'
import { ContactComponent } from './cell/contact/contact.component'
import { DefaultComponent } from './cell/default/default.component'
import { DevelopmentComponent } from './cell/development/development.component'
import { DigitalAnalyticsComponent } from './cell/digital-analytics/digital-analytics.component'
import { DigitalTransformationComponent } from './cell/digital-transformation/digital-transformation.component'
import { FrontendSecurityComponent } from './cell/frontend-security/frontend-security.component'
import { ImprintComponent } from './cell/imprint/imprint.component'
import { JobsComponent } from './cell/jobs/jobs.component'
import { SeoComponent } from './cell/seo/seo.component'
import { ServicesComponent } from './cell/services/services.component'
import { TeamComponent } from './cell/team/team.component'
import { TobiasKroghComponent } from './cell/tobias-krogh/tobias-krogh.component'
import { GridComponent } from './grid/grid.component'
import { LogoComponent } from './logo/logo.component'
import { MetaComponent } from './meta/meta.component'


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CellComponent,
    MetaComponent,
    LogoComponent,
    ContactComponent,
    ImprintComponent,
    MarcoSteinhoffComponent,
    TobiasKroghComponent,
    DefaultComponent,
    ServicesComponent,
    DigitalTransformationComponent,
    DevelopmentComponent,
    FrontendSecurityComponent,
    DigitalAnalyticsComponent,
    SeoComponent,
    JobsComponent,
    ClientsComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
