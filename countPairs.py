def countPairs(numbers, k):
  addUps = {}
  for number in numbers:
    addUps[number] = number + k
  
  initSetup = set(numbers)
  uniques = set()
  for num in addUps:
    candidate = addUps[num]
    if candidate in initSetup:
      if num > candidate:
        check = f"{num}_{candidate}"
      else:
        check = f"{candidate}_{num}"
      
      if check not in addUps:
        uniques.add(check)
  
  return len(uniques)


print(countPairs([1,1,1,2], 1))
print(countPairs([1,1,2,2,3,3], 1))
print(countPairs([1,2,3,4,5,6], 2))
