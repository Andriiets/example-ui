import { Injectable } from '@angular/core';
import {
  EntityAction,
  EntityCollection,
  EntityCollectionReducerMethodMap,
  EntityCollectionReducerMethods,
  EntityCollectionReducerMethodsFactory,
  EntityDefinition,
  EntityDefinitionService, EntityOp,
} from '@ngrx/data';

export class AdditionalEntityCollectionReducerMethods<T> extends EntityCollectionReducerMethods<T> {

  public constructor(
    public entityName: string,
    public definition: EntityDefinition<T>,
  ) {
    super(entityName, definition);
  }

  protected queryByKeySuccess(
    collection: EntityCollection<T>,
    action: EntityAction<T>,
  ): EntityCollection<T> {

    const result = {
      ...super.queryByKeySuccess(collection, action),
      loaded: true,
    };

    return result;

  }

  protected queryManySuccess(collection: EntityCollection<T>, action: EntityAction<T[]>): EntityCollection<T> {
    const result = {
      ...super.queryManySuccess(collection, action),
      loaded: true,
      pagination: this.getPaginationInfo(action),
    };

    return result;
  }

  protected addOne(collection: EntityCollection<T>, action: EntityAction<T>): EntityCollection<T> {

    const result = {
      ...super.addOne(collection, action),
      loaded: true,
    };

    return result;

  }

  protected extractData<D = any>(action: EntityAction<D>): D {

    if (![EntityOp.QUERY_ALL_SUCCESS, EntityOp.QUERY_MANY_SUCCESS].includes(action.payload.entityOp)) {
      return super.extractData(action);
    }

    const defaultData = (action.payload && action.payload.data || []) as D;

    if (!Array.isArray(defaultData)) {
      const dataKey = Object.keys(defaultData).find(k => Array.isArray((defaultData as any)[k]));

      if (dataKey) {
        return (defaultData as any)[dataKey];
      }
    }

    return defaultData;

  }

  private getPaginationInfo<D = any>(action: EntityAction<D>): any {

    const defaultData = (action.payload && action.payload.data || []) as D;

    if (!Array.isArray(defaultData)) {

      const paginationObject: any = { ...defaultData };

      const dataKey = Object.keys(defaultData).find(k => Array.isArray((defaultData as any)[k]));

      if (dataKey) {
        delete paginationObject[dataKey];

        return paginationObject;
      }

    }

    return { };

  }

}

@Injectable()
export class AdditionalEntityCollectionReducerMethodsFactory extends EntityCollectionReducerMethodsFactory {

  public constructor(protected eds: EntityDefinitionService) {
    super(eds);
  }

  /** Create the  {EntityCollectionReducerMethods} for the named entity type */
  public create<T>(entityName: string): EntityCollectionReducerMethodMap<T> {
    const definition = this.eds.getDefinition<T>(
      entityName,
    );
    const methodsClass = new AdditionalEntityCollectionReducerMethods(
      entityName,
      definition,
    );

    return methodsClass.methods;
  }

}

export const ENTITY_COLLECTION_REDUCER_METHODS_FACTORY_PROVIDER = {
  provide: EntityCollectionReducerMethodsFactory,
  useClass: AdditionalEntityCollectionReducerMethodsFactory,
};
