"""
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
"""
class Solution:
    """
    abcabcbb
    a       a
    ab      ab
    abc     abc
    
    """
    def lengthOfLongestSubstring(self, s: str) -> int:
        longest = 0
        for left_pointer in range(len(s)):
            longest_running_till = self.getLongestRunningNonRepeating(s[left_pointer:])
            longest = max(longest_running_till,longest)
        return longest
            
    def getLongestRunningNonRepeating(self, s) -> int:
        seen = set()
        for i in range(len(s)):
            if s[i] in seen:
                return i
            else:
                seen.add(s[i])
        return len(s)
        
        