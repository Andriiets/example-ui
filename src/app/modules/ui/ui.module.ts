import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { SharedModule } from '../../shared/shared.module';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
  declarations: [
    UiComponent,
    TypographyComponent,
    IconsComponent,
  ],
  imports: [
    CommonModule,
    UiRoutingModule,
    SharedModule,
  ]
})
export class UiModule { }
