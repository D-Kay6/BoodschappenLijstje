import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import Action, { ActionType } from "../models/action.model";

@Injectable({
  providedIn: 'root'
})
export default class CollectionService<T> {
  private eventHandler: BehaviorSubject<Action<T>>

  public get event(): Observable<Action<T>> {
    return this.eventHandler;
  }

  constructor() {
    this.eventHandler = new BehaviorSubject<Action<T>>(null);
  }

  public add(item: T) {
    const action = new Action(ActionType.Add, item);
    this.eventHandler.next(action);
  }

  public update(item: T)  {
    const action = new Action(ActionType.Update, item);
    this.eventHandler.next(action);
  }

  public remove(item: T) {
    const action = new Action(ActionType.Delete, item);
    this.eventHandler.next(action);
  }
}