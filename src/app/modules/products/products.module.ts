import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import {
  DefaultPluralizer,
  EntityDefinitionService,
  EntityMetadataMap,
  EntityPluralNames,
  Pluralizer
} from '@ngrx/data';
import { ProductsDataService } from './products-data.service';

export const entityMetadataMap: EntityMetadataMap = {
  products: { },
};

export const pluralNames: EntityPluralNames = {
  products: 'products',
};

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsViewComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [
    ProductsDataService,
  ],
})
export class ProductsModule {
  public constructor(
    pluralizer: Pluralizer,
    entityDefinitionService: EntityDefinitionService,
  ) {

    entityDefinitionService.registerMetadataMap(entityMetadataMap);
    (pluralizer as DefaultPluralizer).registerPluralNames(pluralNames);
  }
}
