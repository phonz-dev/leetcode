// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }

  var sCharCounts = countLetters(s);
  var tCharCounts = countLetters(t);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (sCharCounts[char] !== tCharCounts[char]) {
      return false;
    }
  }

  return true;
};

var countLetters = function(string) {
  var counts = {};

  for (let i = 0; i < string.length; i++) {
      const char = string[i];

      if (char in counts) {
          counts[char] += 1;
      } else {
          counts[char] = 1;
      }
  }

  return counts;
}
