func canJump(nums []int) bool {
	memo := make([]int, len(nums))
	return calc(nums, 0, len(nums)-1, memo)
}

func calc(nums []int, currIdx int, targetIdx int, memo []int) bool {
	if memo[currIdx] == 1 {
		return true
	}

	if memo[currIdx] == -1 {
		return false
	}

	if currIdx == targetIdx {
		return true
	}

	if currIdx > targetIdx {
		return false
	}

	maxJump := nums[currIdx]

	for i := 1; i <= maxJump; i++ {
		if calc(nums, currIdx+i, targetIdx, memo) {
			memo[currIdx] = 1
			return true
		}
	}

	memo[currIdx] = -1
	return false
}
