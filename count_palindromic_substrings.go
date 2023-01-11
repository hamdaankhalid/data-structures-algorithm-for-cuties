package dsa_but_make_it_classy

func countSubstrings(s string) int {
	count := 0
	for start := 0; start < len(s); start++ {
		for end := start; end < len(s); end++ {
			if isPal(s, start, end) {
				count++
			}
		}
	}
	return count
}

func isPal(s string, start int, end int) bool {
	for start < end {
		if s[start] != s[end] {
			return false
		}
		start++
		end--
	}
	return true
}
