public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        // To store the top k frequent elements I need to maintain
        // a bounded collection of incoming values, where I drop the lowest value
        // when something higher than the lowest value in the current bounded collection occurs
        // Since i need to track the lowest value of this bounded collection a min heap would be suitable
        // all incoming elements can have their frequency tracked in a dictionary and then we can pipe them into our min heap
        PriorityQueue<int, int> minHeap = new PriorityQueue<int, int>();

        Dictionary<int, int> freqs = new Dictionary<int, int>();

        foreach (int i in nums)
        {
            if (!freqs.ContainsKey(i))
                freqs[i] = 1;
            else
                freqs[i] += 1;
        }

        foreach (KeyValuePair<int, int> kv in freqs)
        {
            if (minHeap.Count == k)
                minHeap.EnqueueDequeue(kv.Key, kv.Value);
            else
                minHeap.Enqueue(kv.Key, kv.Value);
        }

        return minHeap.UnorderedItems.Select(x => x.Item1).ToArray();
        // Another solution is that while building the freqs use a b+ tree and then iterate through the leaf nodes left to right, the way databases do range queries. This will give the most optimal solution.
    }
}