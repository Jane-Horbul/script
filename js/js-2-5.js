function checkForSpam(str) {
  "use strict";
  const register = str.toLowerCase();
  console.log(register);
  if (register.includes("spam")) {
    return true;
  } else if (register.includes("sale")) {
    return true;
  }
  return false;
}

console.log(checkForSpam("Latest technology news" || "jsadhfkj")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
