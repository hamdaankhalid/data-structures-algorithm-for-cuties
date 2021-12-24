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


function numDecodings(s: string, memo: Map<any, any>=new Map()): number {
    // base case
    // if(s in mem)
    if(s === ""){
        return 1;
    }
    
    if(s[0]==='0'){
        return 0;
    }
    
    if(s in memo){
        return memo[s];
    }
    
    let numWays = 0;
    let counter = 0;
    
    while(
        (counter < s.length) &&
        (Number(s.slice(0, counter+1)) < 27) &&
        (Number(s.slice(0, counter+1)) > 0) 
    ){
      numWays += numDecodings(s.slice(counter+1), memo);
      counter+=1;
    }
    memo[s] = numWays;
    
    return memo[s];
};

