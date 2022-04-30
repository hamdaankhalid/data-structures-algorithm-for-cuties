function maxArea(height: number[]): number {
  let max = 0;
  
  let left = 0;
  let right = height.length - 1;
  
  while (left < right) {
      max = Math.max(max, (right - left)*(Math.min(height[right], height[left])));
      
      if (height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }
  
  return max;
};

// Start on opposite ends moving left or tright pointer when it is smaller, while comparing best area at all points till left and right converge
// then return the best area
