def count_num_ways_to_sum(n, ongoing_sum = 0):
    if ongoing_sum == n:
        return 1
    # bounds recursion to n
    if ongoing_sum > n:
        return 0
    # make a choice for the next throw
    count = 0
    for i in range(1, 7):
        count += count_num_ways_to_sum(n, ongoing_sum + i)
    return count

# this way leverages memoization by going the other way
def count_num_ways_to_sum_alternative(remaining_sum, how_many_ways_to_get_key = {}):
    if remaining_sum in how_many_ways_to_get_key:
        return how_many_ways_to_get_key[i]

    if remaining_sum == 0:
        return 1

    if remaining_sum < 0:
        return 0

    # make a choice for the next throw
    count = 0
    for i in range(1, 7):
        count += count_num_ways_to_sum_alternative(remaining_sum - i, how_many_ways_to_get_key)
    return count

def grid_based_approach(n):
    dp_grid = [0 for i in range(0, n + 1)]
    dp_grid[0] = 1
    for i in range(0, n + 1):
        for choice in range(1,7):
            if i - choice < 0:
                continue
            dp_grid[i] += dp_grid[i - choice]
    return dp_grid[n]

memo = {}
for user_input in range(0, 25):
    print(grid_based_approach(user_input) == count_num_ways_to_sum_alternative(user_input, memo))
