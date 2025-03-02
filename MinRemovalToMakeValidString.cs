public class Solution {
    // Use backtracking
    public string MinRemoveToMakeValid(string s) => MinRemoval(s, 0, 0).Item2; 
    
    public (int, string) MinRemoval(string s, int currIdx, int howManyRemovedSoFar)
    {
        // find the first occuring '(' or ')'
        int firstOccuringIdx = -1;
        for(int i = currIdx; i < s.Length; i++) 
        {
            if (s[i] == '(' || s[i] == ')')
            {
                firstOccuringIdx = i;
                break; 
            }
        }
        
        // if no parens were found, we must have a valid string
        if (firstOccuringIdx == -1)
        {
            if (!IsValid(s))
                return (-1, null);

            return (howManyRemovedSoFar, s); 
        }
        
        // now at this point we know a paren was found
        // make two choices and explore depth first their possibilities

        // First explore not removing parenthesis
        (int minRemovalIfNonRemoved, string candidateResult) = MinRemoval(s, currIdx+1, howManyRemovedSoFar); 
        
        // Explore removing the parenthesis k
        s = s.Remove(firstOccuringIdx, 1);
        (int minRemovalIfRemoved, string candidateResult2) = MinRemoval(s, currIdx, howManyRemovedSoFar + 1); 
        
        // Now lets see how the results compare
        if (candidateResult == null && candidateResult2 != null) 
            return (minRemovalIfRemoved, candidateResult2);
        
        if (candidateResult != null && candidateResult2 == null)
            return (minRemovalIfNonRemoved, candidateResult);
        
        // If both are not null choose the one with lesser removals so far
        if (minRemovalIfNonRemoved < minRemovalIfRemoved)
        {
            return (minRemovalIfNonRemoved, candidateResult); 
        }
        else 
        {
           return (minRemovalIfRemoved, candidateResult2);
        }
    }
    
    // It is the empty string, contains only lowercase characters, or
    // It can be written as AB (A concatenated with B), where A and B are valid strings, or
    // It can be written as (A), where A is a valid string.
    private bool IsValid(string s)
    {
        if (s.Length == 0)
            return true;
        
        Stack<char> stk = new();
        foreach (char c in s)
        {
            if (c == ')')
            {
                // pop till either the stack is empty or till we encounter ')'
                bool validPoppin = false;
                while (stk.Count != 0) 
                {
                    char popped = stk.Pop();
                    if (popped == '(')
                    {
                        validPoppin = true;
                        break;
                    }
                }
                if (!validPoppin)
                    return false;
            }
            else if (c == '(')
            {
                stk.Push(c); 
            }
        }
        
        return stk.Count == 0;
    }
}