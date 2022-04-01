class Solution {
    
  private normalizedWeights: number[];
  private originalWeights: number[]
  
  constructor(w: number[]) {
      this.originalWeights = w;
      this.normalizedWeights = [];
      
      for(let i = 0; i < w.length; i++) {
          for(let _ = 0; _ < w[i]; _++) {
              this.normalizedWeights.push(i);
          }
      }
  }

  pickIndex(): number {
      const min = 0;
      const max = this.normalizedWeights.length;
      const randomIndex = Math.floor(Math.random() * (max - min) + min);
      return this.normalizedWeights[randomIndex];
  }
}

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(w)
* var param_1 = obj.pickIndex()
*/
