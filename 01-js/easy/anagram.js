/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let len1 = str1.toLowerCase();
  let len2 = str2.toLowerCase();
  if(len1.length !== len2.length){
     return false;
  }
  let strr1 = len1.split('').sort().join('');
  let strr2 = len2.split('').sort().join('');
  if(strr1 === strr2){
    return true;
  } else { 
    return false;
  }
}


module.exports = isAnagram;
