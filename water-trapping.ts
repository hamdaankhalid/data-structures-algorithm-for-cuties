function trap(height: number[]): number {
  return new Solution(height).trapWater();
};

class Solution {
  private height: number[];

  constructor(height: number[]){
      this.height = height;
  };
  
  trapWater (): number {
      let trapped = 0;
      const maxesLeftRight = this.buildMaxesLeftToRight();
      const maxesRightLeft = this.buildMaxesRightToLeft();
              
      for (let i = 0; i < this.height.length; i ++) {
          trapped += Math.min(maxesLeftRight[i], maxesRightLeft[i]) - this.height[i];
      }

      return trapped;
  }

  private buildMaxesLeftToRight (): number[] {
      const maxesLeftToRight = [];
      let maxSoFar = 0;

      for (let i = 0; i < this.height.length; i++) {
          const max = Math.max(maxSoFar, this.height[i]);
          maxSoFar = max;
          maxesLeftToRight.push(max);            
      }
      return maxesLeftToRight;
  }

  private buildMaxesRightToLeft (): number[] {
      const maxesRightToLeft = [];
       let maxSoFar = 0;
      for (let i = this.height.length-1; i >= 0 ;i--) {
          const max = Math.max(maxSoFar, this.height[i]);
          maxSoFar = max;
          maxesRightToLeft.unshift(max);
      }
      return maxesRightToLeft;
  }
}
