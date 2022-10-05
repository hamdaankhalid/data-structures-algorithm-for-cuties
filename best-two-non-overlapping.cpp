class Solution {

    bool noOverlap(const std::vector<int>& event1, const std::vector<int>& event2) const {
        // event1 is always before or equal event2
        int event1Start = event1.at(0);
        int event2Start = event2.at(0);
        int event1End = event1.at(1);
        int event2End = event2.at(1);
   
        return (event1Start < event2Start) && (event1End < event2Start);
    }
    
public:
    int maxTwoEvents(vector<vector<int>>& events) {
        
        std::sort(events.begin(), events.end());
        
        int maxSum = 0;
        int eventSize = events.size();
        for (int i = 0; i < eventSize; i++) {
            std::vector<int> event1 = events.at(i);
            int maxPointsFromHere = event1.at(2);
            for (int j = i+1; j < eventSize; j++) {
                std::vector<int> event2 = events.at(j);
                if (noOverlap(event1, event2)) {
                    maxPointsFromHere = max(maxPointsFromHere, event1.at(2)+event2.at(2));
                }
            }
            maxSum = max(maxSum, maxPointsFromHere);
        }
        
        return maxSum;
    }
};
