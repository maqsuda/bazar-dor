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
