import { Component } from '@angular/core';
import CollectionService from 'src/app/services/collection.service';
import Product from 'src/app/models/product.model';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export default class ShoppingCartComponent {
  constructor(public collection: CollectionService<Product>) { }
}