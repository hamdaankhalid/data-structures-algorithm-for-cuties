
bool atlanticEval(std::pair<int, int> point, vector<vector<int>>& heights) {
  return point.first == heights.size() - 1 || point.second == heights[0].size() - 1;
}

bool pacificEval(std::pair<int, int> point, vector<vector<int>>& heights) {
  return point.first == 0 || point.second == 0;
}

struct PairHash {
    template <class T1, class T2>
    std::size_t operator () (const std::pair<T1, T2>& p) const {
        auto h1 = std::hash<T1>{}(p.first);
        auto h2 = std::hash<T2>{}(p.second);

        // Combine the hashes of the two elements
        return h1 ^ (h2 << 1);
    }
};

class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
      std::vector<std::vector<int>> bothWayCells;

      std::unordered_set<std::pair<int, int>, PairHash> atlanticMemo;
      std::unordered_set<std::pair<int, int>, PairHash> pacificMemo;
      for (int i = 0; i < heights.size(); i++) {
        for (int j = 0; j < heights[0].size(); j++) {
          auto rowcol = std::make_pair(i, j);
          if (reachedAtlantic(rowcol, heights, atlanticMemo) && reachedPacific(rowcol, heights, pacificMemo)) {
            std::vector<int> meow = {i, j};
            bothWayCells.push_back(meow);
          }
        }
      }
      return bothWayCells;
    }
private:
  // reached atlantic

  bool reachedAtlantic(std::pair<int, int> curr, vector<vector<int>>& heights, std::unordered_set<std::pair<int, int>, PairHash>& atlanticMemo) {
    std::unordered_set<std::pair<int, int>, PairHash> checker;
    return reachedDest(curr, heights, atlanticEval, checker, atlanticMemo);
  }

  bool reachedPacific(std::pair<int, int> curr, vector<vector<int>>& heights, std::unordered_set<std::pair<int, int>, PairHash>& pacificMemo) {
    std::unordered_set<std::pair<int, int>, PairHash> checker;
    return reachedDest(curr, heights, pacificEval, checker, pacificMemo);
  }

  bool reachedDest(std::pair<int, int> curr, vector<vector<int>>& heights, bool (*eval)(std::pair<int, int>, vector<vector<int>>&), std::unordered_set<std::pair<int, int>, PairHash>& visited, std::unordered_set<std::pair<int, int>, PairHash>& memo) {
    if (eval(curr, heights) || memo.find(curr) != memo.end()) {
      return true;
    }

    // explore the left from here
    std::pair<int, int> left = std::make_pair(curr.first, curr.second - 1);
    if (left.second > -1 && heights[curr.first][curr.second] >= heights[left.first][left.second] &&
      visited.find(left) == visited.end() ) {
        visited.insert(left);
        if (reachedDest(left, heights, eval, visited, memo)) {
          memo.insert(left);
          return true;
        }
    }

    // explore right from here
    std::pair<int, int> right = std::make_pair(curr.first, curr.second + 1);
    if (right.second < heights[0].size() && heights[curr.first][curr.second] >= heights[right.first][right.second] &&
      visited.find(right) == visited.end() ) {
        visited.insert(right);
        if (reachedDest(right, heights, eval, visited, memo)) {
          memo.insert(right);
          return true;
        }
    }

    // explore up from here
    std::pair<int, int> up = std::make_pair(curr.first - 1, curr.second);
    if (up.first > -1 && heights[curr.first][curr.second] >= heights[up.first][up.second] &&
      visited.find(up) == visited.end() ) {
        visited.insert(up);
        if (reachedDest(up, heights, eval, visited, memo)) {
          memo.insert(up);
          return true;
        }
    }

    // explore down from here
    std::pair<int, int> down = std::make_pair(curr.first + 1, curr.second);
    if (down.first < heights.size() && heights[curr.first][curr.second] >= heights[down.first][down.second] &&
      visited.find(down) == visited.end() ) {
        visited.insert(down);
        if (reachedDest(down, heights, eval, visited, memo)) {
          memo.insert(down);
          return true;
        }
    }

    return false;
  }
};
