#include <map>
#include <vector>
#include <limits>
#include <string>

namespace
{
    using namespace std;
    class Solution
    {
    public:
        int maxPoints(vector<vector<int> > &points)
        {
            int global_max_points = 0;
            int points_size = points.size();

            if (points_size <= 2)
                return points_size;

            for (int i = 0; i < points_size; i++)
            {
                vector<int> anchor_point = points[i];
                // some data structure we can keep inserting to that takes care of max frequency
                map<string, int> slope_frequency_store;
                for (int j = i + 1; j < points_size; j++)
                {
                    vector<int> second_point = points[j];
                    pair<int, int> dy_dx = find_slope(anchor_point, second_point);
                    int dy = dy_dx.first;
                    int dx = dy_dx.second;
                    
                    int gcd;
                    if (dy == numeric_limits<int>::max()) {
                        gcd = 1;
                    } else if (dy == 1 && dx == 1){
                        gcd = 1;
                    }else {
                        gcd = __gcd(dy, dx);    
                    }
                                        
                    int gcd_normalized_dy = dy / gcd;
                    int gcd_normalized_dx = dx / gcd;

                    string formatted_normalized_slope = to_string(gcd_normalized_dy) + "," + to_string(gcd_normalized_dx);
                                        
                    if (slope_frequency_store.find(formatted_normalized_slope) == slope_frequency_store.end()) {
                        slope_frequency_store[formatted_normalized_slope] = 0;
                    }
                    slope_frequency_store[formatted_normalized_slope]++;
                    
                }
                // find the max frequency stored in the above operations
                int local_max_points = 0;
                map<string, int>::iterator it;
                for (it = slope_frequency_store.begin(); it != slope_frequency_store.end(); it++){
                    cout << it->second << endl;
                    local_max_points = max(it->second, local_max_points);
                }
                global_max_points = local_max_points+1 > global_max_points ? local_max_points +1: global_max_points;
            }

            return global_max_points;
        }

    
        pair<int, int> find_slope(vector<int> point_1, vector<int> point_2)
        {
            int y_1 = point_1[1];
            int y_2 = point_2[1];
            int x_1 = point_1[0];
            int x_2 = point_2[0];

            if (x_2 == x_1)
            {
                return {numeric_limits<int>::max(), numeric_limits<int>::max()};
            }

            return {y_2 - y_1, x_2 - x_1};
        }
    };
}
