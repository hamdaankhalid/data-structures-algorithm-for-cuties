/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const combinedLength = nums1.length + nums2.length;
    const answer = combinedLength%2 === 0 ? evenMedian(nums1, nums2, combinedLength) : oddMedian(nums1, nums2, combinedLength);
    return answer;
};

function evenMedian(nums1: number[], nums2: number[], combinedLength:number): number {
    const buildCombinedTill =  (combinedLength / 2)+1;
    const combinedArray = combineTill(nums1, nums2, buildCombinedTill);
    const combinedMedian = (combinedArray[combinedArray.length-1] + combinedArray[combinedArray.length-2])/2;
    return combinedMedian;
};

function oddMedian(nums1: number[], nums2: number[], combinedLength: number): number {
    const buildCombinedTill =  Math.floor(combinedLength / 2)+1;
    const combinedArray = combineTill(nums1, nums2, buildCombinedTill);
    return combinedArray[combinedArray.length-1];
};

function combineTill(nums1: number[], nums2: number[], limit: number, combined: number[] = []): number[] {
    if (limit === 0) {
        return combined;
    }
    
    let candidate1 = 10000000000;
    let candidate2 = 10000000000;
    
    if(nums1.length>0){
        candidate1 = nums1[0];
    }
    
    if(nums2.length >0){
        candidate2 = nums2[0];
    }
    
    if(candidate1 > candidate2){
        const choice = candidate2;
        combined.push(choice);
        const newLimit = limit-1;
        return combineTill(nums1, nums2.slice(1), newLimit, combined);
    }else{
        const choice = candidate1;
        combined.push(choice);
        const newLimit = limit-1;
        return combineTill(nums1.slice(1), nums2, newLimit, combined);
    }
}
