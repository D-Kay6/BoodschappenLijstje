import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, Input, OnInit } from "@angular/core";
import { Observable, throwError } from "rxjs";
import Action, { ActionType } from "src/app/models/action.model";
import Product from "src/app/models/product.model";

@Component({
  template: ''
})
export default abstract class BaseComponent implements OnInit {
  public products: Product[];

  @Input()
  public events: Observable<Action<Product>>;

  constructor() {
    this.products = new Array<Product>();
  }

  ngOnInit(): void {
    this.events.subscribe(
      action => {
        if (!action) return;
        switch (action.type) {
          case ActionType.Add:
            this.add(action.item);
            break;
          case ActionType.Update:
            this.update(action.item);
            break;
          case ActionType.Delete:
            this.delete(action.item);
            break;
        }
      }
    );
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
  }

  protected add(item: Product) {
    throwError('Something went wrong. This message should never appear.');
  }

  protected update(item: Product) {
    throwError('Something went wrong. This message should never appear.');
  }

  protected delete(item: Product) {
    const index = this.products.indexOf(item);
    if (index >= 0) this.products.splice(index, 1);
  }
}