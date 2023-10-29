#include <vector>

/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

/*
 * What am I maximizing on? area of the rectangle, base*height
 * */
class Solution {
public:
    int maxArea(std::vector<int>& height) {
		int best = 0;

		int left = 0;
		int right = height.size() - 1;

		while (left < right) {
			best =  std::max(best, (right - left) * std::min(height[left], height[right]));

			if (height[left] < height[right]) {
				left++;
			} else {
				right--;
			}
		}

		return best;
    }
};
