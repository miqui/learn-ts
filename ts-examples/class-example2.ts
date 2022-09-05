type Person = {
  name: string;
  getName?(): string;
};
interface Owner extends Person {
  item: string;
  getItemDetails?(): string;
}
class ThingOwner implements Owner {
  constructor(public name: string, public item: string) {}
  getName() {
    return this.name;
  }
  getItemDetails() {
    return this.item;
  }
}
