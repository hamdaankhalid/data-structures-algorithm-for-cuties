/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/

function searchRange(nums: number[], target: number): number[] {
    let counter = 0
 
    while(counter < nums.length){
         const currNum = nums[counter];
         if(currNum === target){
             return [counter, findConsecutiveEnd(nums, target, counter)]
         }else{
          counter += 1  
        }
    }
     
     return [-1, -1]
 };
 
 function findConsecutiveEnd(nums: number[], target: number, firstIdx: number): number{
     // given an array, index, target, tell me last consecutive num of target, the given index is the first point
     let  lastOccurAt = firstIdx;
     
     while(nums[lastOccurAt+1] == target){
         lastOccurAt++;
     }
     
     return lastOccurAt;
 }   