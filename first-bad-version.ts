/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

  return function(n: number): number {
      let left = 1;
      let right = n;
      
      while (left < right) {
          let mid = Math.floor(left+((right-left)/2));

          if (isBadVersion(mid)) {
              right = mid;
          } else {
              left = mid+1;
          }
          // console.log(left, right);
      }
      
      return left;
  };
};
  
/*
1 2 3 4 5
  3 is good then bad must be on the right
  if
*/
