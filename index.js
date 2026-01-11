import { calculateRevenue } from "./business.js";

const batch = {
    distributor: "Los Pollos Hermanos",
    weight: 50,
    purity: 99.1,
    price: 40000
};

const revenue = calculateRevenue(batch.weight, batch.purity, batch.price);

console.log("=====================================");
console.log("    BLUE SKY CRM - SALES REPORT      ");
console.log("=====================================");
console.log(`Client: ${batch.distributor}`);
console.log(`Revenue: $${revenue.toLocaleString()}`);

if (batch.purity < 96) {
    console.log("?? WARNING: Purity below threshold. Contact the Lab.");
} else {
    console.log("? Quality Check: PASSED");
}
console.log("=====================================");
