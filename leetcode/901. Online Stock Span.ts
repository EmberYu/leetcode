class StockSpanner {
  stack: [number, number][] = [];
  constructor() {}

  next(price: number): number {
    let ans = 1;
    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
      ans += this.stack.pop()![1];
    }

    this.stack.push([price, ans]);

    // console.log(this.stack);
    return ans;
  }
}

// var stockSpanner = new StockSpanner();
// console.log(stockSpanner.next(100)); // return 1
// console.log(stockSpanner.next(80)); // return 1
// console.log(stockSpanner.next(60)); // return 1
// console.log(stockSpanner.next(70)); // return 2
// console.log(stockSpanner.next(60)); // return 1
// console.log(stockSpanner.next(75)); // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
// console.log(stockSpanner.next(85)); // return 6
