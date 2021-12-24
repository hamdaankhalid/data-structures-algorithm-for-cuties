"""
Given a string s and an integer k, return the length of the longest substring of 
s such that the frequency of each character in this substring is greater than or
equal to k.
"""

class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        if len(s)<k: 
            return 0
        
        for c in set(s):
            if s.count(c) < k:
                # split
                return max([self.longestSubstring(z, k) for z in s.split(c)])
        # if we hit this it means it was a vaild substring so just return its length
        return len(s)