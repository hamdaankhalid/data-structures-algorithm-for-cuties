package dsa_but_make_it_classy

func isMonotonic(nums []int) bool {
	if len(nums) < 2 {
		return true
	}

	isInc := nums[0] <= nums[1]
	hadTied := nums[0] == nums[1]

	for i := 1; i < len(nums) - 1; i++ {
		if hadTied && nums[i] != nums[i+1]{
			isInc = nums[i] <= nums[i+1]
			hadTied = false
		} else if hadTied {
			continue
		}

		if isInc && nums[i] > nums[i+1] {
			return false
		} else if !isInc && nums[i] < nums[i+1]{
			return false
		}
	}

	return true
}
