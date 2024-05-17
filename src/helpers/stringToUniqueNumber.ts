export function stringToUniqueNumber(inputString: string, rangeMax = 15000) {
  // Step 1: Optional cleanup to remove non-alphanumeric characters
  const cleanString = inputString.replace(/[^a-zA-Z0-9]/g, "");

  // Step 2: Map alphanumeric characters to a unique numeric value
  // We'll use the charCodeAt() function to get the character's Unicode code point
  // and sum up these values to get a unique number for the string
  let uniqueSum = 0;
  for (let i = 0; i < cleanString.length; i++) {
    uniqueSum += cleanString.charCodeAt(i);
  }

  // Step 3: Use a hash function to ensure the number is within the desired range
  // We'll use a simple modulo operation for this example
  const uniqueNumber = uniqueSum % rangeMax;

  return uniqueNumber;
}
