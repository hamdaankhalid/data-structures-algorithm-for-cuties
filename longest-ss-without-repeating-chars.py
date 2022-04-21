class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        leftPointer = 0
        longestSoFar = 0
        for i in range(len(s)):
            while s[i] in s[leftPointer:i]:
                leftPointer += 1

            longestSoFar = max(longestSoFar, i - leftPointer + 1)
        return longestSoFar
