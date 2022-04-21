class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        return self.buildString(s) == self.buildString(t)
    
    def buildString(self, s):
        res = ""
        for i in s:
            if i == "#":
                res = res[0:-1]
            else:
                res+=i
        return res