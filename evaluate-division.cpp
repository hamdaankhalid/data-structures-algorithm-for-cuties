#include <vector>
#include <map>
#include <set>
#include <queue>
#include <string>

using namespace std;


struct QNode {
  double aggregated;
  string identifier;

  QNode(string id,double ag) {
    aggregated = ag;
    identifier = id;
  }
};



class QueryEngine {    
    
    map<string, map<string, double> > facts;

    double dfs(string source, string end, set<string> visited) {
      if (facts.find(source) == facts.end() || facts.find(end) == facts.end()) {
        return -1.0;
      }

      map<string, double> optionsFromSource = facts[source];

      for (auto const& x : optionsFromSource) {
        if (visited.find(x.first) != visited.end()) {
          continue;
        }
        visited.insert(x.first);
        string potentialSource = x.first;
        double potentialVal = x.second;

        if (potentialSource == end) {
          return potentialVal;
        }

        double inner = dfs(potentialSource, end, visited);

        if (inner != -1) {
          return potentialVal * inner;
        }
      }
      return -1.0;
    }

    double bfs(string source, string end) {
      std::queue<QNode> q;
      
      QNode qn(source, 1);
      q.push(qn);
      
      double aggregated = 1;
      std::set<string> visited;

      while(!q.empty()) {
        QNode curr = q.front();
        q.pop();
        map<string, double> optionsFromCurr = facts[curr.identifier];
        for(auto const &x: optionsFromCurr) {
          
          if(visited.find(x.first)!= visited.end()) {
            continue;
          }

          if (x.first == end) {
            return x.second * curr.aggregated;
          }

          visited.insert(x.first);
          QNode q2(x.first, x.second*curr.aggregated);
          q.push(q2);
        }
      }

      return -1;
    }

    public:
    
      void ingest(vector<string> &equation, double val) {
          // every produces 2 relations one straight forward and one inverse
          string var1 = equation[0];
          string var2 = equation[1];
          // from var1 -> var2 = val && var2 -> var1 = 1/val
          if (facts.find(var1) == facts.end()) {
              map<string, double> innerMap;
              facts[var1] = innerMap;
          }
          if (facts.find(var2) == facts.end()) {
            map<string, double> innerMap2;
              facts[var2] = innerMap2;
          }
          facts.at(var1)[var2] = val;
          facts.at(var2)[var1] = 1/val;

      }
    
      double get(vector<string>& query) {
        string start = query[0];
        string end = query[1];
        set<string> visited;
        // return dfs(start, end, visited);
        return bfs(start, end);
      }
};


class Solution {
public:
    vector<double> calcEquation(vector<vector<string> >& equations, vector<double>& values, vector<vector<string> >& queries) {
        vector<double> result;
        QueryEngine queryEngine;
        
        for (int i = 0; i < equations.size(); i++) {
            queryEngine.ingest(equations[i], values[i]);    
        }
        
        for (int j = 0; j < queries.size(); j++) {
            vector<string> query = queries[j];
            result.push_back(queryEngine.get(query));
        }
        
        return result;
    }
};
