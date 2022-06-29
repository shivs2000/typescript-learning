console.log("hello");
let age: number = 20;
if (age > 10) age += 10;
console.log(age);

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 2;
  return income * 4;
}
calculateTax(10000, 2023);
//objects
const employee: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "shivam",
  retire: (date: Date) => {
    console.log("retire date" + date);
  },
};
//better way to use objects
