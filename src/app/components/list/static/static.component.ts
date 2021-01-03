import { Component } from '@angular/core';
import Product from 'src/app/models/product.model';
import BaseComponent from '../base/base.component';

@Component({
  selector: 'static-list',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export default class StaticComponent extends BaseComponent {
  protected add(item: Product) {
    if (!item.disabled) return;
    this.products.push(item);
  }

  protected update(item: Product) {
    if (item.disabled) this.add(item);
  }
}