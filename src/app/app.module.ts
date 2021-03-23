import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypographyComponent } from './modules/typography/typography.component';
import { SharedModule } from './shared/shared.module';
import { IconsComponent } from './modules/icons/icons.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './modules/icons/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    IconsComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
