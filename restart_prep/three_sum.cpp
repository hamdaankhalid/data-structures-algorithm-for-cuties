#include <vector>
#include <unordered_map>
#include <unordered_set>
#include<string>

/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
 * */
class Solution {
public:
	std::vector<std::vector<int> > threeSum(std::vector<int>& nums) {
		std::unordered_set<std::string> dumbCheck;
		std::vector<std::vector<int> > result;
		for (int i = 0; i < nums.size(); i++) {
			int target = 0-nums[i];
			std::vector<int> triplet;	
			triplet.push_back(nums[i]);

			std::unordered_map<int, int> seenBefore;
			// two sum for this target, exlcuding i index
			for (int j = 0; j < nums.size(); j++) {
				if (j == i)
					continue;

				int checkFor = target - nums[j];
				if (seenBefore.find(checkFor) != seenBefore.end()) {
					triplet.push_back(nums[j]);
					triplet.push_back(checkFor);
					std::sort(triplet.begin(), triplet.end());
					std::string checker = this->vecToString(triplet);
					if (dumbCheck.find(checker) == dumbCheck.end()) {
						result.push_back(triplet);
						dumbCheck.insert(checker);
					}
					std::vector<int> newOne;
					triplet = newOne;class Solution {
public:
	std::vector<std::vector<int> > threeSum(std::vector<int>& nums) {
		std::unordered_set<std::string> dumbCheck;
		std::vector<std::vector<int> > result;
		for (int i = 0; i < nums.size(); i++) {
			int target = 0-nums[i];
			std::vector<int> triplet;	
			triplet.push_back(nums[i]);

			std::unordered_map<int, int> seenBefore;
			// two sum for this target, exlcuding i index
			for (int j = 0; j < nums.size(); j++) {
				if (j == i)
					continue;

				int checkFor = target - nums[j];
				if (seenBefore.find(checkFor) != seenBefore.end()) {
					triplet.push_back(nums[j]);
					triplet.push_back(checkFor);
					std::sort(triplet.begin(), triplet.end());
					std::string checker = this->vecToString(triplet);
					if (dumbCheck.find(checker) == dumbCheck.end()) {
						result.push_back(triplet);
						dumbCheck.insert(checker);
					}
					std::vector<int> newone;
					newone.push_back(nums[i]);
					triplet = newone;
				}
				seenBefore.insert(std::make_pair(nums[j], j));
			}
		}
		return result;
    }

private:
	std::string vecToString(std::vector<int>& a) {
		std::string b;
		for (int x : a) {
			b.push_back(static_cast<char>(x));
			b.push_back(',');
		}
		return b;
	}
};
				}
				seenBefore.insert(std::make_pair(nums[j], j));
			}
		}
		return result;
    }

private:
	std::string vecToString(std::vector<int>& a) {
		std::string b;
		for (int x : a) {
			b.push_back(static_cast<char>(x));
			b.push_back(',');
		}
		return b;
	}
};

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        std::sort(nums.begin(), nums.end());
        std::set<std::vector<int>> s;
        for (int i = 0; i < nums.size(); i++) {
            int j = i+1;
            int k = nums.size() - 1;
            while (j < k) {
                int result = nums[i] + nums[j] + nums[k];
                if (result == 0) {
                    s.insert({nums[i], nums[j], nums[k]});
                    j++;
                    k--;
                } else if (result < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }
        std::vector<std::vector<int>> output;
        for(auto triplets : s)
            output.push_back(triplets);
        return output;
    }
};
