/**
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 * 
 */

function permute(nums: number[]): number[][] {
    const permutations = [];
    solve(nums, permutations, []);
    return permutations;
};

function solve(nums: number[], permutations: number[][], running: number[] ) {
    if(nums.length === 0){
        permutations.push(running);
        return;
    }
    
    // take a num from nums and add it into running
    for(let i = 0; i< nums.length; i++){
        let numsCopy = nums.slice();
        numsCopy.splice(i, 1);
        solve(numsCopy, permutations, [...running, nums[i] ] );
    }
};

    //             0 1 3
    //     [0] 13    [1] 0 3   [3] 0 1
    // [01] 3