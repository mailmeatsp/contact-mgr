import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent implements OnInit {

  productList: any[];

  constructor(private productService: ProductService, private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

  addToCartHandler(product: any): void {
    this.cartDataService.updateCart(product);
  }
}


