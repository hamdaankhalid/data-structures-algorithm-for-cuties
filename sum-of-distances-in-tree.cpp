#include <vector>
#include <set>
#include <iostream>
#include <queue>

struct QNode {
  int branch;
  int currDist;
};

class Solution {

  int bfs(int n, int branch, std::vector<std::vector<int> >& edges) {
    std::vector<int> branches = edges[branch];

    std::queue<QNode> q;
    QNode qn{branch, 0};
    q.push(qn);

    std::set<int> seenBefore = { branch };
    
    int qNodeSum = 0;
    while (!q.empty()) {
      QNode currNode = q.front();
      q.pop();
      
      qNodeSum += currNode.currDist;

      // std::cout << currNode.currDist << "\n";
      
      std::vector<int> branches = edges[currNode.branch];

      for (int branch : branches) {
        if (seenBefore.find(branch) != seenBefore.end()) continue;
        
        QNode childQn{branch, currNode.currDist+1};
        q.push(childQn);

        seenBefore.insert(branch);

      }
    }

    return qNodeSum;
  }

public:
    std::vector<int> sumOfDistancesInTree(int n, std::vector<std::vector<int> >& edges) {
        std::vector<int> result(n, 0);

        std::vector<int> innerVector;
        std::vector<std::vector<int> > adjacencylist(n, innerVector);
        
        for (std::vector<int> ijPair : edges) {
          int i = ijPair.at(0);
          int j = ijPair.at(1);
          adjacencylist.at(i).push_back(j);
          adjacencylist.at(j).push_back(i);
        }
        
//         for (int i = 0; i < adjacencylist.size(); i++) {
//             std::cout << i;
//             for (int k: adjacencylist.at(i)) {
//                 std::cout << " ," << k;
//             }
            
//             std::cout << "\n";
//         }
        
        for (int i = 0; i < n; i++) {
          // do a bfs from each i and maintain level order traversal
          result[i] = bfs(i, i, adjacencylist);
        }

        return result;
    }
};
