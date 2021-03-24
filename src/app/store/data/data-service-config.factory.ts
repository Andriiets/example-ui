import { DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from '../../../environments/environment';

export const dataServiceConfigFactory = (): DefaultDataServiceConfig => {

  return {
    root: `${environment.apiURL}/api/v1`,
  };

};
