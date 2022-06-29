type carYear = number;
type carBrand = string;
type carModel = string;

type Car = {
  year: carYear;
  brand: carBrand;
  model: carModel;
};
const car: Car = {
  year: 2022,
  brand: "maruti-suzuki",
  model: "swift",
};

console.log(car.brand);

//For objects
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

const employee1: Employee = {
  id: 12,
  name: "shivam",
  retire: (date: Date) => {
    console.log(date);
  },
};
