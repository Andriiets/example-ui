import { Component, OnInit } from '@angular/core';
import { RouterStateService } from '../../../store/states';
import { ProductsDataService } from '../products-data.service';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { StatusModel } from '../../../store/interfaces';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {
  public item$: Observable<Product>;
  public status$: Observable<StatusModel>;

  constructor(
    private readonly routerState: RouterStateService,
    public productsDataService: ProductsDataService,
  ) { }

  ngOnInit(): void {
    this.status$ = this.productsDataService.status$;

    this.item$ = this.routerState.getParam$('id')
      .pipe(
        filter(id => !!id),
        switchMap(id => this.productsDataService.getByKey(id)),
      );
  }

}
