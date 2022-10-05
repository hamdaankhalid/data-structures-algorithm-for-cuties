#include <vector>
#include <math.h>
#include <set>


class Solution {
	void buildPermutation(
			std::vector<std::vector<int> >& result,
			std::vector<int>& unselectedPool
			)
	{
		if (unselectedPool.size() == 0) {
            std::vector<int> nonce;
            result.push_back(nonce);
			return;
		}
		
		for (int i = 0; i < unselectedPool.size(); i++) {
			int pick = unselectedPool.at(i);
			std::vector<int> removedCopy = unselectedPool;
			removedCopy.erase(removedCopy.begin() + i);
			
			std::vector<std::vector<int> > innerResult;
			buildPermutation(innerResult, removedCopy);

			for (std::vector<int> inner : innerResult) {
				std::vector<int> concatenatedRes = { pick };
				concatenatedRes.insert(concatenatedRes.end(), inner.begin(), inner.end());
				result.push_back(concatenatedRes);
			}
		}
	}

public:
    std::vector<std::vector<int> > permute(std::vector<int>& nums) {
		std::vector<std::vector<int> > res;
		buildPermutation(res, nums);
		return res;
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
 *	
 * /
