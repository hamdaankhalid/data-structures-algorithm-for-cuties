function longestStrChain(words: string[]): number {
  let longest = 0
  const wordSet = new Set(words);
  for(let word of words) {
      longest = Math.max(longest, dfs(wordSet, word, 1));
  }
  return longest;
};

function dfs(wordSet: Set<string>, word: string, runningChain): number {
  const options = getOptions(wordSet, word);
  if (options.length === 0) {
      return runningChain;
  }
  let longest = 1;
  for (let option of options) {
      longest = Math.max(longest, dfs(wordSet, option, runningChain + 1));
  }
  return longest;
}

function getOptions(words: Set<string>, word: string): string[] {
  const res = [];
  for (let i = 0; i < word.length; i++) {
      const omittedCharWord = `${word.slice(0, i)}${word.slice(i+1)}`;
      if (words.has(omittedCharWord)) {
          res.push(omittedCharWord);
      }
  }
  return res;
}
