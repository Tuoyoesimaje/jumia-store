// The API gives prices in dollars but we need naira here
// Simple conversion utility

const USD_TO_NGN = 1600;

export function convertToNaira(usdPrice) {
  const nairaPrice = usdPrice * USD_TO_NGN;
  return Math.round(nairaPrice);
}

export function formatNairaPrice(usdPrice) {
  const nairaPrice = convertToNaira(usdPrice);
  return nairaPrice.toLocaleString('en-NG');
}
