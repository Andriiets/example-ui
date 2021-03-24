import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './modules/ui/icons/test/test.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DefaultDataServiceConfig, DefaultDataServiceFactory, EntityDataModule } from '@ngrx/data';
import {
  DataServiceFactory,
  ENTITY_COLLECTION_REDUCER_METHODS_FACTORY_PROVIDER,
  ENTITY_DISPATCHER_DEFAULT_OPTIONS, ENTITY_DISPATCHER_FACTORY_PROVIDER
} from './store/data';
import { RouterState, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouterStateSerializer } from './common/router-utils';
import { CustomRouteReuseStrategy } from './store/strategies';
import { states } from './store/states';
import { metaReducers, reducers } from './store/reducers';
import { effects } from './store/effects';
import { dataServiceConfigFactory } from './store/data/data-service-config.factory';
import { services } from './services';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,

    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
      },
    }),

    EffectsModule.forRoot(effects),

    EntityDataModule.forRoot({}),

    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],

  providers: [
    {
      provide: DefaultDataServiceFactory,
      useClass: DataServiceFactory,
    },

    ENTITY_COLLECTION_REDUCER_METHODS_FACTORY_PROVIDER,
    ENTITY_DISPATCHER_DEFAULT_OPTIONS,
    ENTITY_DISPATCHER_FACTORY_PROVIDER,

    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
    { provide: DefaultDataServiceConfig, useFactory: dataServiceConfigFactory },

    ...states,
    ...services,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
