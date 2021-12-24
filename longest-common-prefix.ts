/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strs: string[]): string {
    let common = "";
    let smallestWordLen: number = Math.min(...strs.map((word) => word.length));
    
    let counter = 0;
    while(counter < smallestWordLen){
        let match = strs[0][counter];
        
        for(let w of strs){
            if(w[counter]!==match){
                return common;
            }
        }
        
        common += match;
        counter++
    }
    return common;
};