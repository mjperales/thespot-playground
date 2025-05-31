export function maxProfit(prices: number[]): number {
  let profit = 0;
  let minPrice = prices[0];
  for (let i = 1; prices.length - 1 >= i; i++) {
    if (prices[i]! < minPrice!) {
      minPrice = prices[i];
    }
    profit = Math.max(profit, prices[i]! - minPrice!);
  }

  return profit;
}
