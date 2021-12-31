/**
 Do not return anything, modify nums in-place instead.
 Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

sort using bucketsort linear time complexity
 */
function sortColors(nums: number[]): void {
    
    let zeros = 0;
    let ones = 0;
    let twos = 0;
    
    for(const num of nums){
        switch (num) {
            case 0:
                zeros+=1;
                break;
            case 1:
                ones+=1;
                break;
            case 2:
                twos+=1;
                break;
            default:
                break;
        }            
    }
    
    let lastModifiedIndex = 0;
    for(let i = 0; i<4; i++){
        // go over 1,2,3
        if(i === 0){
            while(zeros>0){
                nums[lastModifiedIndex] = 0;
                zeros--;
                lastModifiedIndex++;
            };
        } else if(i===1){
            while(ones>0){
                nums[lastModifiedIndex] = 1;
                ones--;
                lastModifiedIndex++;
            };
        }else{
            while(twos>0){
                nums[lastModifiedIndex] = 2;
                twos--;
                lastModifiedIndex++;
            };
        }
    }
};

