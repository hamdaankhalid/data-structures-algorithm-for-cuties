public class Solution {
    // Implement Djikstras        
    public int NetworkDelayTime(int[][] times, int n, int k) {
        Dictionary<int, int> shortestPathToStation = new Dictionary<int, int>();
        
        for (int i = 1; i < n+1; i++)
        {
            // everything we compare this against will be lesser
            shortestPathToStation[i] = int.MaxValue;
        }
        
        PriorityQueue<Tuple<int, int>, int> pq = new PriorityQueue<Tuple<int, int>, int>();
        
        pq.Enqueue(new Tuple<int, int>(k, 0), 0);

        shortestPathToStation[k] = 0;

        HashSet<int> visited = new HashSet<int>();
     
        while (pq.Count > 0) {
            Tuple<int, int> closestNode = pq.Dequeue();
    
            int curr = closestNode.Item1;
            int stepsTillCurr = closestNode.Item2;

            if (visited.Contains(curr)) {
                continue;
            }

            visited.Add(curr);

            // now from our source get the paths that are reachable
            List<int[]> reachablePaths = this.reachablePaths(times, curr);
            
            foreach (int[] path in reachablePaths) {
                // calc if the previous steps are the minimum steps to get to this reachable path
                // or if we take the stepsTillCurrent and then add the cost to reach is lesser.
                int potentialSum = path[2] + stepsTillCurr;
                int currentValueForDest = shortestPathToStation[path[1]];

                if (potentialSum < currentValueForDest) {
                    shortestPathToStation[path[1]] = potentialSum;

                    pq.Enqueue(
                        new Tuple<int, int>(
                            path[1], shortestPathToStation[path[1]]
                        ), 
                        shortestPathToStation[path[1]]
                    );
                }
            }
        }
        
        // the time it takes to reach the node the max is the minimum time
        int minTime = 0;
        for (int i = 1; i < n+1; i++) {

            if (shortestPathToStation[i] == int.MaxValue) {
                return -1;
            }
            
            minTime = Math.Max(minTime, shortestPathToStation[i]);
        }
        return minTime;
    }
    
    private List<int[]> reachablePaths(int[][] times, int x)
    {
        List<int[]> res = new List<int[]>();
        for (int i = 0; i < times.Length; i++) {
            if (times[i][0] == x) {
                res.Add(times[i]);
            }
        }
        return res;
    }
}
