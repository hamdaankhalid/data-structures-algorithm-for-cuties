
// Approach 3: Divide and Conquer Approach
// Algorithm

// This approach relies on the observation that the rectangle with maximum area will be the maximum of:

// The widest possible rectangle with height equal to the height of the shortest bar.

// The largest rectangle confined to the left of the shortest bar(subproblem).

// The largest rectangle confined to the right of the shortest bar(subproblem).


function largestRectangleArea(heights: number[]): number {
  return divAndConq(heights, 0, heights.length - 1);
};

function divAndConq(heights: number[], start: number, end: number): number {
    if (start > end) {
        return 0;
    }
    
    let minIndex = start;
    
    for (let i = start; i < end + 1; i++) {
        if (heights[i] < heights[minIndex]) {
            minIndex = i;    
        }
    }
    
    return Math.max(
        heights[minIndex] * (end - start + 1),
        divAndConq(heights, start, minIndex - 1),
        divAndConq(heights, minIndex + 1, end)
    )
}
