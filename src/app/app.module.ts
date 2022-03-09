import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimComponent } from './sim/sim.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { uk_UA } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModule } from './nz/nz.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(uk);

@NgModule({
  declarations: [AppComponent, SimComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: uk_UA }],
  bootstrap: [AppComponent],
})
export class AppModule {}
