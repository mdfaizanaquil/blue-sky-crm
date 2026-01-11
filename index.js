import { calculateRevenue, forecastQuarterly, needsLegalReview } from "./business.js";

const batch = { distributor: "Los Pollos Hermanos", weight: 50, purity: 99.1, price: 40000 };
const revenue = calculateRevenue(batch.weight, batch.purity, batch.price);

console.log(`Revenue: $${revenue.toLocaleString()}`);

if (needsLegalReview(revenue)) {
    console.log("?? LEGAL NOTICE: This deal requires approval from Saul Goodman.");
}
