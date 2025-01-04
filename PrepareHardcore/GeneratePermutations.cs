using System.Data.Common;
using System.Security;

namespace PrepareHardcore;


/// <summary>
/// Generates and prints permutations of a set of n elements
/// </summary>
class GeneratePermutations
{
    int n;

    List<int> permutations;

    bool[] chosen;

    public GeneratePermutations(int n)
    {
        this.n = n;
        this.chosen = new bool[n + 1];
        this.permutations = new List<int>();
    }

    /*
    Permutations
    1 2 3
    1 3 2
    2 1 3
    2 3 1
    3 1 2
    3 2 1

    1 2 3

    outer most loop 1-3
    1 chosen <1>
    loop inside first call stack 1-3 (1 is skipped because chosen)
    2 chosen <1,2>
    loop inside second call stack 1-3 (1, 2 is skipped because chosen, and goes all the way till 3)
    3 chosen <1,2,3>
    size of permuatation indicated completion when third call stack is created

    second call stack terminates with popping 3
    first call stack moves to 3, chooses 3
    first call stack at 3 from 1-3 (1 is skipped, and 3 is skipped because now they are both chosen)
    new second call stack starts from 1-3 (1 and 3 is skipped, 2 is added)
    now because of the size the permutation is complete in third call stack creation

    first call stack has now  cycled 1-3 and terminates
    0th call stack will now move from 1 to "2" in 1-3
    and for each selection it will create a call stack where the one before was chosen
    then the call stack will iterate and continue calling an iteration on each iter item
    */
    public void Generate()
    {
        if (permutations.Count == this.n)
        {
            Console.WriteLine(String.Join(", ", this.permutations));
            return;
        }

        for (int i = 1; i <= this.n; i++)
        {
            if (chosen[i]) continue;

            this.chosen[i] = true;
            this.permutations.Add(i);

            this.Generate();

            this.chosen[i] = false;
            this.permutations.RemoveAt(this.permutations.Count - 1);
        }
    }

    public static void RunDemo()
    {
        var gp = new GeneratePermutations(3);
        gp.Generate();
    }
}