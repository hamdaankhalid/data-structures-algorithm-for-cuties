#include <iostream>
#include <unordered_map>
#include <vector>
#include <limits.h>

/**
 * Given a table of length to price relations, and a rod of length N.
 * Find the best price we can sell the log given that we can cut it for free.
 * 
 * len    1 2 3 4 5
 * price  2 3 1 3 4
 * 
 * rod len = 5
 * 
 * */

/**
 * at each point make a decision
 * find the max if no more cuts
 * find the max
 * */
int RecursiveMaxPriceOnCut(int logLen, const std::unordered_map<int, int>& priceTable) {
  if (logLen == 1) {
    return priceTable.at(1);
  }

  // if we dont make any cut
  int maxHere = priceTable.at(logLen);

  // iterate over the log and simulate a cut lets say 1 cut at 1 and other cut recursivel
  for (int i = 1; i < logLen; i++) {
    int potentialPrice = priceTable.at(i) + RecursiveMaxPriceOnCut(logLen - i, priceTable);
    maxHere = std::max(potentialPrice, maxHere);
  }

  return maxHere;
}


int MemoRecursiveMaxPriceOnCut(int logLen, const std::unordered_map<int, int>& priceTable, std::vector<int>& memo) {
  if (logLen == 1) {
    return priceTable.at(1);
  }

  if (memo.at(logLen) != -1) {
    return memo.at(logLen);
  }

  // if we dont make any cut
  int maxHere = priceTable.at(logLen);

  // iterate over the log and simulate a cut lets say 1 cut at 1 and other cut recursivel
  for (int i = 1; i < logLen; i++) {
    int potentialPrice = priceTable.at(i) + MemoRecursiveMaxPriceOnCut(logLen - i, priceTable, memo);
    maxHere = std::max(potentialPrice, maxHere);
  }

  memo[logLen] = maxHere;

  return maxHere;
}

int TabulationRecursiveMaxPriceOnCut(int logLen, const std::unordered_map<int, int>& priceTable) {
  std::vector<int> table(logLen+1);
  for (int i = 1; i <= logLen; i++) {
    int q = INT_MIN;
    for (int j = 1; j <= i; j++) {
      q = std::max(q, priceTable.at(j) + table.at(i - j));      
    }
    table[i] = q;
  }
  return table[logLen];
}


int main() {

  const std::unordered_map<int, int> table1 = {{1,1},{2,5},{3,8}, {4,9}, {5,10}};

  std::cout << RecursiveMaxPriceOnCut(5, table1) << std::endl;
  
  std::vector<int> memo(5+1, -1);

  std::cout << MemoRecursiveMaxPriceOnCut(5, table1, memo) << std::endl;
  
  std::cout << TabulationRecursiveMaxPriceOnCut(5, table1) << std::endl;


  return 0;
}
