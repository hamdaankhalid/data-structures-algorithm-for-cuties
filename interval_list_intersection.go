package dsa_but_make_it_classy

func intervalIntersection(firstList [][]int, secondList [][]int) [][]int {
	var result [][]int

	for _, firstInterval := range firstList {
		for _, secondInterval := range secondList {
			// does firstInterval intersect with secondInterval?
			// if it intersects merge that bitch and put it in result
			isIntersecting := doesIntersect(firstInterval, secondInterval)

			// fmt.Printf("%v && %v intersect = %t \n", firstInterval, secondInterval, isIntersecting)

			if isIntersecting {
				merged := intersection(firstInterval, secondInterval)
				result = append(result, merged)
			}
		}
	}

	return result
}


func doesIntersect(intvl1 []int, intvl2 []int) bool {
	// [0, 5] && [3, 8]
	if intvl1[1] >= intvl2[0] && intvl1[0] <= intvl2[1] {
		return true
	}

	// [3, 8] && [0, 5]
	if intvl2[1] >= intvl1[0] && intvl2[0] <= intvl1[1] {
		return true
	}

	// [2, 4] && [1, 6]
	if intvl1[0] > intvl2[0] && intvl1[1] < intvl2[1] {
		return true
	}

	// [1, 6] && [2, 4]
	if intvl2[0] > intvl1[0] && intvl2[1] < intvl1[1] {
		return true
	}

	return false
}


// We can safely assume that our intvl's do intersect
func intersection(intvl1 []int, intvl2[]int) []int {
	var startAt int
	if intvl1[0] < intvl2[0] {
		startAt = intvl2[0]
	} else {
		startAt = intvl1[0]
	}

	var endAt int
	if intvl1[1] < intvl2[1] {
		endAt = intvl1[1]
	} else {
		endAt = intvl2[1]
	}

	return []int{startAt, endAt}
}
