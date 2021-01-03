export default class Product {
  name: string;
  amount: number;
  scale: string;
  disabled: boolean;

  constructor() {
    this.name = '';
    this.amount = 1;
    this.disabled = false;
  }
}