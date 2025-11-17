// converting USD prices to Naira
// API gives prices in dollars, we need naira

const USD_TO_NGN = 1600;

export function convertToNaira(usdPrice) {
  const nairaPrice = usdPrice * USD_TO_NGN;
  return Math.round(nairaPrice);
}

export function formatNairaPrice(usdPrice) {
  const nairaPrice = convertToNaira(usdPrice);
  return nairaPrice.toLocaleString('en-NG');
}
