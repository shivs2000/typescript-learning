function kgsToLbs(weight: number | string): number {
  //using technique called narrowing
  if (typeof weight === "number") {
    return weight * 2;
  } else {
    return parseInt(weight) * 2;
  }
}
console.log(kgsToLbs(`10`));
console.log(kgsToLbs(12));
