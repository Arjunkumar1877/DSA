function minimumNumber(n, password) {
  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";

  let hasDigit = false;
  let hasLower = false;
  let hasUpper = false;
  let hasSpecial = false;

  for (let i = 0; i < n; i++) {
    if (numbers.includes(password[i])) hasDigit = true;
    if (lower_case.includes(password[i])) hasLower = true;
    if (upper_case.includes(password[i])) hasUpper = true;
    if (special_characters.includes(password[i])) hasSpecial = true;
  }

  let missingTypes = 0;
  if (!hasDigit) missingTypes++;
  if (!hasLower) missingTypes++;
  if (!hasUpper) missingTypes++;
  if (!hasSpecial) missingTypes++;

  let toAdd = Math.max(missingTypes, 6 - n);

  return toAdd;
}

console.log(minimumNumber(5, "2bb#A")); // Output: 1
