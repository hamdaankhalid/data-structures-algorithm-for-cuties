function alienOrder(words: string[]): string {
  const uniques = new Set(words.join("").split(""));

  const outgoing = {};
  
  for (let i of uniques) {
      outgoing[i] = [];
  };
  
  for(let i = 0; i < words.length - 1; i++) {
      const [word1, word2] = [words[i], words[i+1]];
      
      // the word2 cannot be substring of word1
      if (word1.length > word2.length && word1.slice(0, word2.length) === word2) {
          return "";
      }
      
      for(let j = 0; j < Math.min(word1.length, word2.length); j++) {
          if(word1[j] !== word2[j]) {
              outgoing[word1[j]].push(word2[j]);
              break
          }
      }
  }
  
  const seenBefore = new Set<string>();
  const firstNode = findMinKeyInMap(outgoing, seenBefore, []);
  seenBefore.add(firstNode);
  let q = [firstNode];
  let answer = [];
  
  console.log(outgoing);
  
  while(q.length > 0) {
      
      const curr = q.pop();
      
      answer.unshift(curr);

      for (let i of Object.keys(outgoing)) {
          if(outgoing[i].includes(curr)) {
              if(answer.includes(i)) {
                  return "";
              }
              outgoing[i].splice(outgoing[i].indexOf(curr));
          }
      }
      
      const newMinNode = findMinKeyInMap(outgoing, seenBefore, answer);
      
      if(!newMinNode) {
          return "";
      }

      seenBefore.add(newMinNode); 

      if (newMinNode === "k".repeat(700)) {
          break;
      }

      q.push(newMinNode);
  }

  return answer.join("");
};

function findMinKeyInMap(map: Object, seenBefore: Set<string>, result: string[]): string {
  let min = Infinity;
  let minNode = null;
  

  for (let i of Object.keys(map)) {
      if(!seenBefore.has(i)) {
          if(min > map[i].length) {
              min = map[i].length;
              minNode = i;
          }
      }
  }
  return minNode || "k".repeat(700)
}
