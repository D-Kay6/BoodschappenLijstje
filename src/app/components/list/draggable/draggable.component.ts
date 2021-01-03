import { Component } from '@angular/core';
import Product from 'src/app/models/product.model';
import ListComponent from '../base/base.component';

@Component({
  selector: 'draggable-list',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export default class DraggableComponent extends ListComponent {
  protected add(item: Product) {
    this.products.push(item);
  }

  protected update(item: Product) {
    if (item.disabled) this.delete(item);
  }
}