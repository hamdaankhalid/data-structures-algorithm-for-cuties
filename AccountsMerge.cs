public class Solution {
    // loop over accounts and build an adjaceny list
    // loop over accounts, and walk list or single nodes
    //      create result
    public IList<IList<string>> AccountsMerge(IList<IList<string>> accounts)
    {
        var adjacencyList = new Dictionary<string, List<string>>();
        foreach (IList<string> account in accounts)
        {
            string sourceNode = account[1];
            // skip the person, and then if there are 2 or more emails then link them together bi-directional
            for (int i  = 2; i < account.Count; i++)
            {
                string destinationNode = account[i];

                if (!adjacencyList.ContainsKey(sourceNode))
                    adjacencyList[sourceNode] = new List<string>();
                
                if (!adjacencyList.ContainsKey(destinationNode))
                    adjacencyList[destinationNode] = new List<string>();

                adjacencyList[sourceNode].Add(destinationNode);
                adjacencyList[destinationNode].Add(sourceNode);
            }
        }

        // now traverse the account list again take each account and do a DFS completely
        List<List<string>> result = new List<List<string>>();
        HashSet<string> visited = new HashSet<string>();
        foreach (IList<string> account in accounts)
        {
            string firstEmail = account[1];
            if (visited.Contains(firstEmail))
                continue;

            List<string> resultForThisAccount = new List<string>{ account[0] };

            Dfs(adjacencyList, resultForThisAccount, visited, firstEmail);

            resultForThisAccount.Sort(1, resultForThisAccount.Count - 1, StringComparer.Ordinal);

            result.Add(resultForThisAccount);
        }

        return result.Cast<IList<string>>().ToList();
    }

    private void Dfs(
        Dictionary<string, List<string>> adjacencyList,
        List<string> res,
        HashSet<string> visited,
        string currEmail)
    {
       if (visited.Contains(currEmail))
            return;

        res.Add(currEmail);

        visited.Add(currEmail);

        if (!adjacencyList.TryGetValue(currEmail, out List<string> nextConnections))
            return;

        foreach (string connection in nextConnections)
        {
            if (visited.Contains(connection))
                continue;
            
            Dfs(adjacencyList, res, visited, connection);
        }
    }
}