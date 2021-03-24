import { HttpErrorResponse } from '@angular/common/http';

export interface StatusModel {
  resolved: boolean;
  rejected: boolean;
  pending: boolean;
  err: HttpErrorResponse | null;
}
