import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { SharedModule } from '../../shared/shared.module';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { HelpersComponent } from './helpers/helpers.component';

@NgModule({
  declarations: [
    UiComponent,
    TypographyComponent,
    IconsComponent,
    ButtonsComponent,
    HelpersComponent,
  ],
  imports: [
    CommonModule,
    UiRoutingModule,
    SharedModule,
  ]
})
export class UiModule { }
