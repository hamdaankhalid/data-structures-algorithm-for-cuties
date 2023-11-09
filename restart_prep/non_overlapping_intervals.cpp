class Solution {
public:
  int eraseOverlapIntervals(vector<vector<int>>& intervals) {
    // sort by ending time
    std::sort(intervals.begin(), intervals.end(),  [](const std::vector<int>& a, const std::vector<int>& b) {
      return a[1] < b[1];
    });
    int prev = -10000000;
    int count = 0;

    for (int i = 0; i < intervals.size(); i++) {
      auto curr_intvl = intervals[i];

      if (curr_intvl[0] >= prev) {
        count++;
        prev = curr_intvl[1];
      }
    }

    return intervals.size() - count;
  }
};
