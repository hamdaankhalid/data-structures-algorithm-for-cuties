/*
You are given a list of bombs. The range of a bomb is defined as the area where its effect can be felt. This area is in the shape of a circle with the center as the location of the bomb.

The bombs are represented by a 0-indexed 2D integer array bombs where bombs[i] = [xi, yi, ri]. xi and yi denote the X-coordinate and Y-coordinate of the location of the ith bomb, whereas ri denotes the radius of its range.

You may choose to detonate a single bomb. When a bomb is detonated, it will detonate all bombs that lie in its range. These bombs will further detonate the bombs that lie in their ranges.

Given the list of bombs, return the maximum number of bombs that can be detonated if you are allowed to detonate only one bomb.
 * */

public class Solution 
{
    public int MaximumDetonation(int[][] bombs) 
    {
        int maxBombs = -1;
        for (int i = 0; i < bombs.Length; i++) 
        {
            maxBombs = Math.Max(
                maxBombs, this._detonateBomb(bombs, i)
            );
        } 

        return maxBombs;
    }

    private int _detonateBomb(int[][] bombs, int bombIdx) 
    {
        // take the bomb and detonate it        
        // given x,y, and radius, check 
        // if the bombs intersect
        HashSet<int> visited = new HashSet<int>();

        Stack<int> stack = new Stack<int>();
        stack.Push(bombIdx);

        while (stack.Count > 0) 
        {
            int toDetonate = stack.Pop();

            if (visited.Contains(toDetonate)) 
            {
                continue;
            }

            visited.Add(toDetonate);

            for (int i = 0; i < bombs.Length; i++) 
            {
                if (i == toDetonate) 
                {
                    continue;
                }

                // check if the bomb detonation affects the potentialBomb
                if (this._triggers(bombs[toDetonate], bombs[i])) 
                {
                    stack.Push(i);
                }
            }
        }

        return visited.Count;
    }

    // does b1 trigger b2 ?
    private bool _triggers(int[] b1, int[] b2) 
    {
        int b1X = b1[0];
        int b1Y = b1[1];
        int b1R = b1[2];

        int b2X = b2[0];
        int b2Y = b2[1];

        // return whether the distance between them is less than equal to sum of radii
        double dist = Math.Pow(b2Y - b1Y, 2) + Math.Pow(b2X - b1X, 2);
        double sumRadii = Math.Pow(b1R + b2[2], 2);
        return dist <= sumRadii;
    }
}

