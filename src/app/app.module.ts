import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import AppComponent from './app.component';
import NewProductFormComponent from './components/forms/new-product/new-product.component';
import ShoppingCartComponent from './components/shopping-cart/shopping-cart.component';
import DraggableListComponent from './components/list/draggable/draggable.component';
import StaticListComponent from './components/list/static/static.component';
import ListItemComponent from './components/list/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    NewProductFormComponent,
    ShoppingCartComponent,
    DraggableListComponent,
    StaticListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
