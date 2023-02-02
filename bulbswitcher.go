package dsa_but_make_it_classy

func bulbSwitch(n int) int {
	if n == 0 || n == 1 {
		return n;
	}

	bulbstate := make([]int, n) // first round
	for i := range bulbstate {
		bulbstate[i] = 1
	}

	for i := 2; i < n+1; i++ { // start with second round
		// tog1le every i'th bulb
		for j, currState := range bulbstate {
			if (j+1) % i == 0 {
				if currState == 0 {
					bulbstate[j] = 1
				} else {
					bulbstate[j] = 0
				}
			}
		}

	}


	cnt := 0
	for _, val := range bulbstate {
		cnt += val
	}
	return cnt
}

