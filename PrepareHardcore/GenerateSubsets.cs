namespace PrepareHardcore;


/// <summary>
/// Generates and prints subsets of a set of n elements
/// </summary>
class GenerateSubsets {

    List<int> subset;

    int n;

    public GenerateSubsets(int n) {
        this.subset = new List<int>();
        this.n = n;
    }

    /*
    Set => { 1 2 3 }
    => {∅,{1},{2},{3},{1,2},{1,3},{2,3},{1,2,3}}
    phi is always a subset
    */
    public void Generate(int k = 1) {
        if (k == this.n + 1) {
            Console.WriteLine("SUBSET: " + String.Join(", ", subset));
            return;
        }


        // subset scenario with including k
        this.subset.Add(k);

        this.Generate(k + 1);

        this.subset.RemoveAt(this.subset.Count - 1);

        // subset scenario where we dont include k
        this.Generate(k + 1);
    }

    public static void RunDemo() {
        var gp = new GenerateSubsets(3);
        gp.Generate();
    }
}