function isPalindrome(str) {
  const reversedString = str
    .toLowerCase()
    .replace(/[^\w]/g, "")
    .split("")
    .reverse()
    .join("");
  return reversedString === str.toLowerCase().replace(/[^\w]/g, "");
}
module.exports = isPalindrome;