func uniqueOccurrences(arr []int) bool {
	occurences := make(map[int]int)

	for _, val := range arr {
		currCount, exists := occurences[val]
		if exists {
			occurences[val] = currCount + 1
		} else {
			occurences[val] = 1
		}
	}

	// Check for unique violations

	seenBefore := make(map[int]bool)

	for _, element := range occurences {
		_, seen := seenBefore[element]
		if seen {
			return false
		}
		seenBefore[element] = true
	}
	return true
}
