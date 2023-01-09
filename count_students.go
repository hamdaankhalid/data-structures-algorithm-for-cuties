func countStudents(students []int, sandwiches []int) int {
	studentOgCount := len(students)
	invertRes := 0
	iter := 0
	i := 0
	changeMade := false
	for len(sandwiches) > 0 {
		studentPref := students[0]
		sandwich := sandwiches[0]

		// fmt.Println(studentPref, sandwich)

		if studentPref == sandwich {
			// fmt.Println("Fed")
			sandwiches = sandwiches[1:]
			students = students[1:]
			changeMade = true
			invertRes++
		} else {
			// fmt.Println("Not Fed, move to end of line")
			students = append(students[1:], students[0])
		}

		if i%studentOgCount == 0 && i != 0 {
			if !changeMade {
				break
			}
			changeMade = false
			iter++
		}
		i++
	}

	return len(students)
}
