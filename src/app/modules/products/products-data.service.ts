import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { BaseEntityCollectionService } from '../../store/data';
import { Product } from './product';

@Injectable()
export class ProductsDataService extends BaseEntityCollectionService<Product> {

  public constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('products', serviceElementsFactory);
  }

}
