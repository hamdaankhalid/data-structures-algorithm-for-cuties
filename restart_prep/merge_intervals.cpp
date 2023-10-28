#include <utility>
#include <iostream>
#include <vector>

template<typename T>
std::pair<int, int> mergeSort(std::vector<T>& a, std::pair<int, int> left, std::pair<int, int> right, T maxVal) {
	// only one element in the subarray
	if (abs(left.second - left.first) == 1 && abs(right.second - right.first) == 1) {
		// combine left and right and return the new pair
		T leftVal = a[left.first];
		T rightVal = a [right.first];
		if (rightVal < leftVal) {
			a[right.first] = leftVal;
			a[left.first] = rightVal;
		}
		return std::make_pair(left.first, right.second);
	}
	
	// recursively descent making half of left
	int halfPoint = left.first + ((left.second - left.first)/2);
	std::pair<int, int> leftCombined = mergeSort(a, std::make_pair(left.first, halfPoint), std::make_pair(halfPoint, left.second), maxVal);

	// recursively descent making halg of right
	int halfPointRight = right.first + ((right.second - right.first)/2);
	std::pair<int, int> rightCombined = mergeSort(a, std::make_pair(right.first, halfPointRight), std::make_pair(halfPointRight, right.second), maxVal);
	
	// sort the combined arrays
	std::vector<T> combinedSorted;
	int leftOffset = 0;
	int rightOffset = 0;
	int leftUpperlimit = left.second - left.first;
	int rightUpperlimit = right.second - right.first;
	while (leftOffset < leftUpperlimit || rightOffset < rightUpperlimit) {
		if (leftOffset == leftUpperlimit && rightOffset < rightUpperlimit) {
			// can only choose right
			combinedSorted.push_back(a[right.first+rightOffset]);
			rightOffset++;
			continue;
		}

		if (rightOffset == rightUpperlimit && leftOffset < leftUpperlimit) {
			// can only choose left
			combinedSorted.push_back(a[left.first+leftOffset]);
			leftOffset++;
			continue;
		}
		
		// both are under their upper limit offset!
		T leftVal = a[left.first + leftOffset];
		T rightVal = a[right.first + rightOffset];

		if (leftVal < rightVal) {
			combinedSorted.push_back(leftVal);
			leftOffset++;
		} else  {
			combinedSorted.push_back(rightVal);
			rightOffset++;
		}
	}
	
	for (int i = 0; i < combinedSorted.size(); i++) {
		a[leftCombined.first + i] = combinedSorted[i];
	}

	return std::make_pair(leftCombined.first, rightCombined.second);
}

bool isOverlapping(std::vector<int> a, std::vector<int> b) {
	int aStart = a[0];
	int aEnd = a[1];
	int bStart = b[0];
	int bEnd = b[1];
	return aEnd >= bStart;
}

std::vector<int> mergeIntvls(std::vector<int> a, std::vector<int> b) {
	return {std::min(a[0], b[0]), std::max(a[1], b[1])};
}

/*
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * */
class Solution {
public:
	std::vector<std::vector<int> > merge(std::vector<std::vector<int> >& intervals) {
		std::vector<int> maxVec = {100000, 100000};

		// sort the interval array
		int halfPoint = intervals.size()/2;
		mergeSort(intervals,
				std::make_pair(0, halfPoint),
				std::make_pair(halfPoint, intervals.size()), maxVec);
		
		// intervals are now started
		// we can safely merge left to right
		int intvlIdx = 0;
		while (intvlIdx < intervals.size()) {
			std::vector<int> currIntvl = intervals[intvlIdx];
			std::vector<int> nextIntvl = intervals[intvlIdx+1];
			if (isOverlapping(currIntvl, nextIntvl)) {
				// if there is a merge remove the next intvl and replace the currIntvl with the merged intvl
				std::vector<int> merged = mergeIntvls(currIntvl, nextIntvl);
				intervals[intvlIdx] = merged;
				intervals.erase(intervals.begin() + intvlIdx + 1);
			} else {
				intvlIdx++;
			}
		}

		return intervals;
    }
};


int main() {
	std::vector<int> a;// = {-1, 3, 34,34,234,543,0,9,10,34, 789, -2345, 3,43, 345659, 8};
	a = {1};	
	int halfPoint = a.size() / 2;
	mergeSort<int>(a, std::make_pair(0, halfPoint), std::make_pair(halfPoint, a.size()), 1000000);

	return 0;
}
