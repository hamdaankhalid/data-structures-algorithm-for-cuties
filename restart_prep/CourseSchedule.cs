public class Solution {
    public bool CanFinish(int numCourses, int[][] prerequisites) {
        // Build edge graph
        List<HashSet<int>> graph = new List<HashSet<int>>();

        for (int i = 0; i < numCourses; i++) {
            graph.Add(new HashSet<int>());
        }

        foreach (int[] ordering in prerequisites) {
            int dependent = ordering[0];
            int independent = ordering[1];
            graph[dependent].Add(independent);
        }

        bool[] visited = new bool[numCourses];

        this.RecurUtil(visited, graph);

        foreach (bool c in visited) {
            if (!c)
                return false;
        }

        return true;
    }

    private void RecurUtil(bool[] visited, List<HashSet<int>> graph) {
        List<int> nodeps = new List<int>();
        for (int i = 0; i < graph.Count; i++) {
            if (visited[i]) {
                continue;
            }

            HashSet<int> incoming = graph[i];
            if (incoming.Count == 0) {
                nodeps.Add(i);
                visited[i] = true;
            }
        }
        if (nodeps.Count == 0) {
            return;
        }

        foreach (int nodep in nodeps) {
            for (int j = 0; j < graph.Count; j++) {
                if (graph[j].Contains(nodep)) {
                    graph[j].Remove(nodep);
                }
            }
        }

       this.RecurUtil(visited, graph); 
    }
}
