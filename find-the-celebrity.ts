/**
 * The knows API is defined in the parent class Relation.
 * knows(a: number, b: number): boolean {
 *     ...
 * };
 */

var solution = function(knows: any) {
    
  /**
   find the A that is visted by everyone but visits nobody
  */
  return function(n: number): number {
      let knowsAllPeopleSum = 0;
      const iKnowsJ = {};
      const jKnownByI = {};
      
      for(let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
              if (knows(i, j)) {
                  if (i in iKnowsJ) {
                      iKnowsJ[i] += 1;
                  } else {
                      iKnowsJ[i] = 1;
                  }
                  
                  if (j in jKnownByI) {
                      jKnownByI[j] += 1;
                  } else {
                      jKnownByI[j] = 1;
                  }
              }
          }
          knowsAllPeopleSum += i;
      }
      
      for (let potential = 0; potential < n; potential++) {
          const knownByEveryone = jKnownByI[potential] === n
          const knowsNobody = iKnowsJ[potential] === 1;
          if (knownByEveryone && knowsNobody) {
              return potential;
          }
      }
      
      return -1;
      
  };
};
