/**
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */

function merge(intervals: number[][]): number[][] {
    if(intervals.length<2){
        return intervals;
    };
    
    let leftPointer = 0;
    let rightPointer = 1;
    
    intervals.sort( (firstEl, secondEl) => { return firstEl[0] - secondEl[0] });
    
    while(rightPointer<intervals.length) {
        if(doesOverlap(intervals[leftPointer], intervals[rightPointer])) {
            intervals[leftPointer] = mergeLR(intervals[leftPointer], intervals[rightPointer]);
            intervals.splice(rightPointer, 1);
        }else{
            leftPointer++;
            rightPointer++
        }
    }
    
    return intervals;
};

function doesOverlap(lInterval: number[], rInterval: number[]){
    return (Math.max(...lInterval) >= Math.min(...rInterval))
}

function mergeLR(lInterval: number[], rInterval: number[]){
    const together = [...lInterval, ...rInterval];
    return [Math.min(...together), Math.max(...together)];
}