#include<array>
#include<cmath>
#include<iostream>

class Solution {
    
    std::array<char, 4>ordering = {'N', 'E', 'S', 'W'};
    
    void turn(char& currFace, bool isLeft) {
        
        int idxOfCurrFace = 0;
        for (int i = 0; i < ordering.size(); i++) {
          if (ordering[i] == currFace) {
            idxOfCurrFace = i;
            break;
          }
        }

        if (idxOfCurrFace == 0 && isLeft) {
          currFace = ordering[3];
        } else if (idxOfCurrFace == 3 && !isLeft) {
          currFace = ordering[0];
        } else if (isLeft){
          currFace = ordering[idxOfCurrFace - 1]; 
        } else {
          currFace = ordering[idxOfCurrFace + 1]; 
        }
    }

    void applyIfNotBlocked(std::array<int, 2>& position, int offset, std::vector<std::vector<int> >& obstacles, bool isXoffset) {
      if (!isXoffset && offset > 0) {
        // inside the obstacles there should be no element with same x and with y that is less that y + yOffset
        for (std::vector<int> obstacle: obstacles) {
            if ( obstacle[0] == position[0] &&
                (position[1] < obstacle[1] && obstacle[1] <= position[1] + offset )
               ) {
                // then go up tll one before obstacle
                position[1] = obstacle[1]-1;
                return;
            }
        }
        position[1]+=offset;     
      } else if (!isXoffset && offset < 0){
          for (std::vector<int> obstacle: obstacles) {
              if ( obstacle[0] == position[0] &&
                (position[1] > obstacle[1] && obstacle[1] >= position[1] + offset )
               ) {
                  // then go down tll one before obstacle
                position[1] = obstacle[1]+1;
                return;
              }
          }
          position[1]+=offset;
      } else if (isXoffset && offset > 0) {
          for (std::vector<int> obstacle: obstacles) {
              if (obstacle[1] == position[1] &&
                 (position[0] < obstacle[0] && obstacle[0] <= position[0] + offset)
                 ) {
                  position[0] = obstacle[0]-1;
                  return;
              }
          }
          position[0]+=offset;
      } else {
          for (std::vector<int> obstacle: obstacles) {
              if (obstacle[1] == position[1] &&
                 (position[0] > obstacle[0] && obstacle[0] >= position[0] + offset)
                 ) {
                  position[0] = obstacle[0]+1;
                  return;
              }
          }
          position[0]+=offset;
      }
    }

    int euclideanFromZero(std::array<int, 2>& position) {
      return std::pow(position[1], 2) + std::pow(position[0], 2);
    }
    
    public:
    
    int robotSim(std::vector<int>& commands, std::vector<std::vector<int> >& obstacles) {
        char currFace = 'N';
        std::array<int, 2> position = {0, 0};
        int maxDistance = 0;
        
        for (int command : commands) {
            if (command == -2) {
                turn(currFace, true);
            } else if (command == -1) {
                turn(currFace, false);
            } else {
                if (currFace == 'N') {
                  applyIfNotBlocked(position, command, obstacles, false);
                } else if (currFace == 'S') {
                  applyIfNotBlocked(position, -1*command, obstacles, false);
                } else if (currFace == 'E') {
                  applyIfNotBlocked(position, command, obstacles, true);
                } else {
                  applyIfNotBlocked(position, -1*command, obstacles, true);
                }
            }
            // std::cout << position[0] << ", " << position[1] << "\n";
            maxDistance = max(maxDistance, euclideanFromZero(position));
        
        }

        return maxDistance;
    }    
};


class Solution {
public:
    int robotSim(vector<int>& commands, vector<vector<int>>& obstacles) {
        int dx[4] = {0, 1, 0, -1};
        int dy[4] = {1, 0, -1, 0};
        int x = 0, y = 0, di = 0;

        set<pair<int, int>> obstacleSet;
        for (vector<int> obstacle: obstacles)
            obstacleSet.insert(make_pair(obstacle[0], obstacle[1]));

        int ans = 0;
        for (int cmd: commands) {
            if (cmd == -2)
                di = (di + 3) % 4;
            else if (cmd == -1)
                di = (di + 1) % 4;
            else {
                for (int k = 0; k < cmd; ++k) {
                    int nx = x + dx[di];
                    int ny = y + dy[di];
                    if (obstacleSet.find(make_pair(nx, ny)) == obstacleSet.end()) {
                        x = nx;
                        y = ny;
                        ans = max(ans, x*x + y*y);
                    }
                }
            }
        }

        return ans;
    }
};


/**
N + movement will increment y
S + mocevemnt will decrement y
E + movement will increment x
W + movement will decrement x
**/
