/**
 Do not return anything, modify s in-place instead.
 */
function reverseWords(s: string[]): void {
  function reverseWordsHelper(left: number, right: number) {

      while (left < right) {
          let temp = s[left]
          s[left] = s[right];
          s[right] = temp;
          right -= 1;
          left += 1;
      }
  }

  reverseWordsHelper(0, s.length - 1)

  let left = 0;
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === " ") {
          reverseWordsHelper(left, i - 1);
          left = i + 1;
      }
  };

  reverseWordsHelper(left, s.length - 1);
};
