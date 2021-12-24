"""
GIVEN a1....aN numbers, find all possible
subsets that lead to sum k
"""

def B(arr: int, target: int, running_solution: list = [], solutions: list = []) -> list:
    if target==0:
        # if the target is at 0
        # add the list running_solution to solutions and return
        solutions.append(running_solution)
        return

    if not arr:
        # if the array is empty return
        return

    # if the addition of the first element does not make the new target negative include first element in running solution
    # and call function B array given as all items after first element, target as target - first element, and add first element
    # as a part of the running solution
    if target-arr[0]>=0 :
        B(arr[1:], target-arr[0], running_solution+[arr[0]], solutions)

    # call function B with array as all elements after first element, same target, and same running_solution, and list of solutions
    B(arr[1:], target, running_solution, solutions)

    # return solutions
    return solutions

arr = [1,2,3,3,4,5]
target = 5

print(B(arr, target))