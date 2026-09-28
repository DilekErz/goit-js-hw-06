class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    return this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    const bul = this.#items.indexOf(itemToRemove);
    if (bul !== -1) {
      this.#items.splice(bul, 1);
    }
  }
}
