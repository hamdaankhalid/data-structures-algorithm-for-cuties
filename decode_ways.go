package dsa_but_make_it_classy

import "strconv"

/*
   recursively collect all posibilites and bubble back up the count of the possibilites
   226
*/

func numDecodings(s string) int {
	mapping := "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	memo := make(map[string]int)
	return ways(s, "", mapping, memo)
}

func ways(s string, running string, encoding string, memo map[string]int) int {
	if len(s) == 0 {
		return 1
	}

	if count, exists := memo[s]; exists {
		return count
	}

	cnt := 0
	idx := 1
	for idx <= len(s) {
		candidate, _ := strconv.Atoi(s[:idx])
		if candidate == 0 {
			return 0
		}
		if candidate > 26 {
			break
		}
		runningCp := running + string(encoding[candidate-1])
		cnt += ways(s[idx:], runningCp, encoding, memo)
		idx++
	}

	memo[s] = cnt

	return cnt
}
