// Calculates tax using defined brackets and rates. Handles edge cases and returns the correct tax. Includes example for ₱25,000.

function calculateTax(income) {
  // Define tax brackets and rates
  const FIRST_BRACKET = 10000;
  const SECOND_BRACKET = 20000;
  const FIRST_RATE = 0.05;
  const SECOND_RATE = 0.1;
  const THIRD_RATE = 0.15;

  let tax = 0;

  // Calculate first bracket (5% up to 10000)
  if (income > 0) {
    tax += Math.min(income, FIRST_BRACKET) * FIRST_RATE;
  }

  // Calculate second bracket (10% from 10001 to 20000)
  if (income > FIRST_BRACKET) {
    tax += Math.min(income - FIRST_BRACKET, FIRST_BRACKET) * SECOND_RATE;
  }

  // Calculate third bracket (15% above 20000)
  if (income > SECOND_BRACKET) {
    tax += (income - SECOND_BRACKET) * THIRD_RATE;
  }

  return tax;
}

console.log(calculateTax(25000));
