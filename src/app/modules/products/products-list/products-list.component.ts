import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Product } from '../product';
import { ProductsDataService } from '../products-data.service';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import isEqualWith from 'lodash.isequalwith';
import { MergeStrategy } from '@ngrx/data';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public items$: Observable<Product[]>;
  public loading$: Observable<boolean>;

  constructor(
    public productsDataService: ProductsDataService,
  ) {
  }

  ngOnInit(): void {
    this.loading$ = this.productsDataService.loading$;
    this.items$ = this.productsDataService.serverDataChanged$
      .pipe(
        switchMap(params =>
          this.productsDataService.getAll(),
        ),
      );
  }

}
