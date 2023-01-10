package dsa_but_make_it_classy

import (
	"fmt"
	"math"
)

/*
  [-2,1,-3,4,-1,2,1,-5,4]
0  -2
1	3
2	0
3   4
4   3
5   5
6   6
7
8
9
*/

func maxSubArray(nums []int) int {
	var c []int
	return helper(nums, c)
}

func helper(nums []int, soFar []int) int {
	fmt.Println(nums, soFar)
	if len(nums) == 0 {
		return sum(soFar)
	}

	includeFirst := helper(nums[1:], append(soFar, nums[0]))

	var newOne []int
	noIncludeFirst := helper(nums[1:], newOne)

	endHere := sum(soFar)

	return max([]int{includeFirst, noIncludeFirst, endHere})
}

func max(nums []int) int {
	mx := math.MinInt
	for _, v := range nums {
		if v > mx {
			mx = v
		}
	}
	return mx
}

func sum(nums []int) int {
	res := 0
	for _, val := range nums {
		res += val
	}
	return res
}
