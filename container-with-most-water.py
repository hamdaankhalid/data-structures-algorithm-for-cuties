class Solution:
    def maxArea(self, height: List[int]) -> int:
        bestArea = 0
        left = 0
        right = len(height) - 1
        
        while left < right:
            bestArea = max(bestArea, min(height[left], height[right])*(right-left))
            
            # move the pointer of the shorter side
            if height[left] > height[right]:
                right-=1
            else:
                left+=1
            
        return bestArea
