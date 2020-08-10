import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorInterceptorProvider } from './config/error-interceptor';

import { CoreModule } from './core/core.module';
import { SharedUtil } from './shared/utils/shared-util';
import { Error404Component } from './pages/error404/error404.component';



@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ErrorInterceptorProvider,
    SharedUtil,
    MessageService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
