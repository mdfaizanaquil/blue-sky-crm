export const calculateRevenue = (w, p, pr) => (w * pr * (p / 100));
export const forecastQuarterly = (monthlySales) => (monthlySales * 3);
export const needsLegalReview = (revenue) => (revenue > 1000000);
