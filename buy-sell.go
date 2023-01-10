package dsa_but_make_it_classy

import "math"

func maxProfit(prices []int) int {
	// visualize buying at each max so far and attempt selling at each point keeping a track of maxProf
	maxProf := 0
	minBuy := math.MaxInt
	for _, val := range prices {
		if val < minBuy {
			minBuy = val
		}

		sellScenario := val - minBuy
		if sellScenario > maxProf {
			maxProf = sellScenario
		}
	}

	return maxProf
}
