import { Component, Input } from '@angular/core';
import Product from 'src/app/models/product.model';
import CollectionService from 'src/app/services/collection.service';

@Component({
  selector: 'form-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export default class NewProductComponent {
  public product: Product;

  constructor(private collection: CollectionService<Product>) {
    this.product = new Product();
  }

  addProduct() {
    if (!this.product.name) return;
    this.collection.add(this.product);
    this.product = new Product();
  }
}