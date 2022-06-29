"use strict";
console.log("hello");
let age = 20;
if (age > 10)
    age += 10;
console.log(age);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 2;
    return income * 4;
}
calculateTax(10000, 2023);
const employee = {
    id: 1,
    name: "shivam",
    retire: (date) => {
        console.log("retire date" + date);
    },
};
//# sourceMappingURL=index.js.map