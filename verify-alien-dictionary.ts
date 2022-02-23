/*
In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.
*/
// compare pair by pair
function isAlienSorted(words: string[], order: string): boolean {
  // find the first differing character, if we can find it is it preceeding the one in the next word?
  // if we cant find first differing character, is the prefic before its  parent?
  const ordering = orderMap(order);
  
  // go through every pair of word in words and make sure its in order
  for(let i = 0; i< words.length - 1; i++){
      
      const word1 = words[i];
      const word2 = words[i+1];
      
      for (let j = 0; j< word1.length; j++) {
          if(j === word2.length) {
              return false;   
          }
          
          if(word1[j] !== word2[j]) {
              // first differing char
              // Does it satisfy the condition for this pair?
              if(ordering[word1[j]] > ordering[word2[j]]) {
                  return false;
              }
              // else we basically found the first differing character and it satisfies our condition for this pair, we will go to next pair now
              break;
          }
      }
  }
  return true;
};

function orderMap(order: string): Object{
  const index={};
  
  for (let i = 0; i < order.length ; i++) {
      index[order[i]] = i;
  }
  return index
}
