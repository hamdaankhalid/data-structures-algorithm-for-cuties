package dsa_but_make_it_classy

func IsBalanced(s string) string {
	revBrackets := map[string]string{
		"}": "{",
		"]": "[",
		")": "(",
	}

	var stack []string

	for _, bracket := range s {
		if expectedOpposite, isClosing := revBrackets[string(bracket)]; isClosing {
			// check if the last open bracket is equal to the expectedOpposite
			if stack[len(stack)-1] != expectedOpposite {
				return "NO"
			}
			stack = stack[:len(stack)-1] // pop the top
		} else {
			stack = append(stack, string(bracket))
		}
	}

	if len(stack) != 0 {
		return "NO"
	}

	return "YES"
}
