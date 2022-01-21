// Given an array of strings words, return the first palindromic string in the array.
// If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// Example 1:
// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.

// Example 2:
// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".

// Example 3:
// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.

const firstPalindrome = (words) => {
	for (let i = 0; i < words.length; i++) {
		let word = words[i];

		if (isPalindrome(word)) return word;
	}

	return "";
};

const isPalindrome = (s) => {
	let [l, r] = [0, s.length - 1];

	while (l < r) {
		if (s[l] !== s[r]) return false;

		l++;
		r--;
	}

	return true;
};
