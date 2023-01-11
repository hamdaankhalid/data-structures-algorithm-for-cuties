package dsa_but_make_it_classy

func reverseWords(s string) string {
	res := ""

	idx := 0
	currWord := ""
	for idx < len(s) {
		for idx < len(s) && s[idx] != ' ' {
			currWord += string(s[idx])
			idx++
		}
		if currWord != "" {
			res = currWord + " " + res
			currWord = ""
		}
		idx++
	}

	return res[:len(res)-1]
}
