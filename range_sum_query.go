package dsa_but_make_it_classy

type NumMatrix struct {
	matrix [][]int
}


func Constructor(matrix [][]int) NumMatrix {
	return NumMatrix{ matrix: matrix }
}

func (this *NumMatrix) SumRegion(row1 int, col1 int, row2 int, col2 int) int {
	sum := 0
	for row := row1; row < row2+1; row++ {
		for col := col1; col < col2+1; col++ {
			sum += this.matrix[row][col]
		}
	}
	return sum
}

