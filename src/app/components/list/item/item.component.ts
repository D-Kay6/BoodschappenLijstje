import { Component, Input } from '@angular/core';
import Product from 'src/app/models/product.model';
import CollectionService from 'src/app/services/collection.service';

@Component({
  selector: 'list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export default class ItemComponent {
  @Input()
  item: Product;

  constructor(private collection: CollectionService<Product>) { }

  complete() {
    this.item.disabled = true;
    this.collection.update(this.item);
  }

  delete() {
    this.collection.remove(this.item);
  }
}