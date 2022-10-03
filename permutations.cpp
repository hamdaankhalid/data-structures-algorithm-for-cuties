#include <vector>
#include <math.h>

class Solution {
	std::vector<int> buildPermutation(
			std::vector<int>& nums,
			std::vector<int>& running,
			
			) {
				
	}
public:
    std::vector<std::vector<int> > permute(std::vector<int>& nums) {
		std::vector<std::vector<int> > result;
		std::vector<int> running;

		for (int i = 0; i < nums.size(); i++) {
			std::set<int> used;
			used.add(
			result.push_back(buildPermutation(nums, running));
		}

		return result;
    }
};
/**
 *	1 2 3 -> return a vector of all unique permutations
 *
 *	Idea: a number with 3 digits will have 3*2*1 permutations
 *	
 *	1 2 3
 *	1 3 2
 *
 *	2 1 3
 *	2 3 1
 *
 *	3 1 2
 *	3 2 1
 *	
 *	build each sequence and then pass it into our results
 *	at completion return
 *
 *	
 * /
