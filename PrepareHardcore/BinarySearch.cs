namespace PrepareHardcore;


/// <summary>
/// Given an indexable sorted data structure such as list/array be able to perform binary search
/// </summary>
class BinarySearch {

    /*
    Binary Search Algorithm:
    Since we know items are sorted we half them, compare and search left or right.
    This is done till we either find the item or we have searched all search worthy ranges.

    -----------------------

    Why left <= right?
    The condition left <= right ensures that the search continues as long as there is a valid range to check. Here’s why it's necessary:

    Initial State: At the start, left is the first index, and right is the last index. For the array to be valid, left must be less than or equal to right.
    Valid Range: As you narrow down the range, left and right are updated. The loop continues while there’s at least one element to check (left == right).
    Termination: The loop stops when left > right, meaning the range has been exhausted, and the target is not in the array.
    
    --------------------------
    
    Why middle + 1 and middle - 1?
    These adjustments are made to narrow the search space after determining that the middle element is not the target:

    Middle Element is Not Target:
    If the middle element is less than the target, you search in the right half. To do this, set left = middle + 1 to exclude the middle element (since you know it’s not the target).
    If the middle element is greater than the target, you search in the left half. To do this, set right = middle - 1 to exclude the middle element.
    Why Not Include middle? Including middle again would result in an infinite loop or redundant checks because middle is already verified to be unequal to the target in the current iteration.
    Since our loop terminates when left > right we need to do this -1 or +1
    */
    public static int Search<T>(IList<T> items, T target) where T : IComparable<T> {
        int left = 0;
        int right = items.Count - 1;

        // Why left <= right
        while (left <= right) {
            int middle = (right + left) / 2;

            int comparison = items[middle].CompareTo(target);
            if (comparison == 0)
                return middle;
            // item precedes target so search for the item in right half
            else if (comparison < 0) {
                left = middle + 1;
            }
            // search in left half
            else {
                right = middle - 1;
            }
        }


        return -1;
    }

    public static void RunDemo() {
        int[] search = new int[7] { -5, -3, 2, 4, 9, 100, 300 };

        foreach (int item in search) {
            Console.WriteLine(Search(search, item));
        }

        // test -1 cases
        Console.WriteLine(Search(search, -99));
        Console.WriteLine(Search(search, 1000));

        Console.WriteLine(Search(new int[0], 1000));
    }
}