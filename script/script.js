const Cart = function (array = []) {
  this.goods = array;
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.calculateGoodsPrice = function () {
  this.totalPrice = this.goods.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
};

Cart.prototype.addGoods = function (good) {
  this.goods.push(good);
  this.increaseCount();
  this.calculateGoodsPrice();
};

Cart.prototype.getTotalPrice = function () {
  return this.totalPrice;
};

Cart.prototype.increaseCount = function () {
  this.count += 1;
};

Cart.prototype.clear = function () {
  this.goods = [];
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.print = function () {
  console.log(JSON.stringify(this.goods));
  console.log(JSON.stringify(this.totalPrice));
};

const Goods = function (name, price, discount) {
  this.price = price;
  this.name = name;
  this.discount = discount;
};

const FoodGoods = function (name, price, discount, calories) {
  Goods.call(this, name, price, discount);
  this.calories = calories;
};
const СlothingGoods = function (name, price, discount, material) {
  Goods.call(this, name, price, discount);
  this.material = material;
};
const TechnicsGoods = function (name, price, discount, typeeQuipment) {
  Goods.call(this, name, price, discount);
  this.typeeQuipment = typeeQuipment;
};


const apple = new FoodGoods('apple', 30, 0, 100);
const tshirt = new СlothingGoods('tshirt', 100, 5, 'cotton');
const phone = new TechnicsGoods('Iphone', 1300, 0, 'phone');

const cart = new Cart();
cart.addGoods(apple);
cart.addGoods(tshirt);
cart.addGoods(phone);

console.log(cart.print());