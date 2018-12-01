import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}
  amount = 6;
  page = 1;
  choice = 0;
  keyword_list = {
    name: '',
    author_name: '',
    publisher: '',
    isbn: '',
    classification: ''
  };
  data: any = {data: []};
  get show_list() {
    return this.productsService.show_list;
  }
  ngOnInit() {
  this.productsService.getProducts().subscribe(data => {
    this.data = data;
  });
}
  add_to_cart(id, item_amount) {
    this.cartService.add_to_cart(id, item_amount);
  }
  // search(keyword_list) {
  //   this.productsService.search(keyword_list);
  //   this.page = 1;
  // }
  // sort(choice) {
  //   this.productsService.sort(choice);
  //   this.page = 1;
  // }
  // origin() {
  //   this.productsService.origin();
  // }
}
