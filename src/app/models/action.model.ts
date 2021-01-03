export default class Action<T> {
  type: ActionType;
  item: T;

  constructor(type: ActionType, item: T) {
    this.type = type;
    this.item = item;
  }
}

export enum ActionType {
  Add,
  Update,
  Delete
}