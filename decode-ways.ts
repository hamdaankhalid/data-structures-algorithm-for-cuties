/*
    A message containing letters from A-Z can be encoded into numbers using the following mapping:

    'A' -> "1"
    'B' -> "2"
    ...
    'Z' -> "26"
    To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

    "AAJF" with the grouping (1 1 10 6)
    "KJF" with the grouping (11 10 6)
*/

function numDecodings(s: string, memo: Map<any, any> = new Map()): number {
    // base case
    
    if(s === ""){
        return 1;
    }
    
    // memocase
    if(s in memo) {
        return memo[s];
    }
    
    // edge case
    if(s[0]==='0'){
        return 0;
    }
    
    let numWays = 0;
    
    for (let i = 0; i < s.length; i++) {
            const selected = s.slice(0,i+1);
            if(Number(selected)<=26) {
                
                numWays += numDecodings(s.slice(i+1), memo);
                
                memo[s] = numWays;
            }
    }
    
    return memo[s];
};

/* 
logic 12
12 can be broken into 1 2 or 12

123 can be 1 2 3, 12 3, 1 23

we can create a branch for each possibility
                    1 2 3
            [1] 23        [12] 3
[1, 2]  3    [1, 23]        [12, 3]
*/

