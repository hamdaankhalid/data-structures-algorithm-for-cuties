/*
 0 0 1 0 1 1

 1 at 2
 1 at 4
 1 at 5

 1
*/
func minOperations(boxes string) []int {
	var oneidxs []int
	for idx, val := range boxes {
		if val == '1' {
			oneidxs = append(oneidxs, idx)
		}
	}

	result := make([]int, len(boxes))

	for idx, _ := range boxes {
		result[idx] = calc(idx, oneidxs)
	}
	return result
}

func calc(idx int, oneidxs []int) int {
	score := 0
	for _, oneidx := range oneidxs {
		score += abs(oneidx - idx)
	}
	return score
}

func abs(x int) int {
	if x < 0 {
		return -1 * x
	}
	return x
}
