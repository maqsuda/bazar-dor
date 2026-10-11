export interface ProductTypes {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: string;
    pct: number;
  };
  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  };
}

export interface categoryTypes {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

export const toBanglaDigits = (value: number) =>
  String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);

export const toBanglaUnit = (unit) => {
  const units = {
    kg: "কেজি",
    kilogram: "কেজি",
    gram: "গ্রাম",
    g: "গ্রাম",
    dozzon: "ডজন",
    dozen: "ডজন",
    litter: "লিটার",
    liter: "লিটার",
    litre: "লিটার",
    l: "লিটার",
  };

  return units[String(unit).toLowerCase()] || unit;
};

export function calculateMarketStats(product) {
  const markets = product.markets;

  if (!markets || markets.length === 0) {
    return {
      maximum: 0,
      minimum: 0,
      average: 0,
    };
  }

  const allMinPrices = markets.map((market) => market.min);
  const allMaxPrices = markets.map((market) => market.max);

  const minimum = Math.min(...allMinPrices);
  const maximum = Math.max(...allMaxPrices);

  // Average of every market's minimum and maximum price
  const total = markets.reduce(
    (sum, market) => sum + market.min + market.max,
    0,
  );

  const average = total / (markets.length * 2);

  return {
    maximum,
    minimum,
    average: Math.round(average),
  };
}

// export function getMarketWisePrices(product: string) {
//   const markets = product?.markets;

//   if (!Array.isArray(markets)) {
//     console.error("product.markets is not an array", product);
//     return [];
//   }

//   return markets.map((market) => ({
//     market: market.market,
//     division: market.division,
//     minimum: market.min,
//     maximum: market.max,
//     average: Math.round((market.min + market.max) / 2),
//   }));
// }

export function getMarketWisePrices(products) {
  return products.markets.map((market) => ({
    market: market.market,
    division: market.division,
    minimum: market.min,
    maximum: market.max,
    average: Math.round((market.min + market.max) / 2),
  }));
}
