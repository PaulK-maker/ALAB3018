// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



{
constn1 = 10;
constn2 = 15;
constn3 = 20;
constn4 = 5;


constn1 =(constn1%10)===0;
constn2 =(constn2%15)===0;
constn3 =(constn3%20)===0;
constn4 =(constn4%5)===0;

let result=constn1+constn2+constn2+constn4;
let cachedSum=result
}
// temprate literal
console.log(` constn1 +constn1+constn3+constn4=result`)
// check first nummer is larger than last numner
constn1 =10;
constn4=5;

const largerOne=constn1>constn4;
console.log(largerOne)
let cachedSum2 =largerOne

// performing the following arithmetic chain
{
let LastNum=constn4
let FirstNum=constn1
let resultDiff=LastNum-FirstNum;
console.log(resultDiff)}

// temprate literal
console.log(` resultDiff=constn4-constn1`)

// multiply result by last number
newNum= resultDiff*constn3;

// reminder after deviding the result by fourth number
const reminder= newNum%constn4;

console.log(reminder)

// Cross country Road trip

let totalDist=1500  //miles

// my car fuel efficeiency
speed=milesPerhour=55;
milesPerGalon=milesPerG=30;
speed2=milesPerhour2=60;
milesPerGalon2=milesPerG2=28;
speed3=milesPerhour=75;
milesPerGalon3=milesPerG3=23;

budgetedCash=fuelbudget=175
AverageCost= avergCost=3

// getting cost per category

console.log(costOfTravel1);
console.log(costOfTravel2);
console.log(costOfTravel3);

const costOfTravel1= totalDist/milesPerG*avergCost
const costOfTravel2  =totalDist/milesPerG2*avergCost
const costOfTravel3= totalDist/milesPerG3*avergCost


// Conduct Ternary operator on which one is less expensive
const lowestCost= (costOfTravel1<costOfTravel2 && costOfTravel1<costOfTravel3)? true: false;

