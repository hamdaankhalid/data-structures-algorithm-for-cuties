#include <vector>
#include <math>

 /*
  * place carpet at beginning of each tile and stretch it to it's end
  * use sliding window to maintain the cover 
 */
class Solution {
  public: 
  int maximumWhiteTiles(std::vector<std::vector<int> >& tiles, int carpetLen) {
    sort(tiles.begin(), tiles.end());

    int res = 0;
    int cover = 0;
    int carpetStartTileIdx = 0;
    int carpetEndTileIdx = 0;

    while (carpetEndTileIdx < tiles.size() && res < carpetLen) {
      std::vector<int> carpetStartTile = tiles.at(carpetStartTileIdx);
      std::vector<int> carpetEndTile = tiles.at(carpetEndTileIdx);


      if ( carpetStartTile.at(0) + carpetLen > carpetEndTile.at(1) ) {
        // we can expand carpetEnd
        cover += carpetEndTile.at(1) - carpetEndTile.at(0) + 1;
        res = std::max(res, cover);
        carpetEndTileIdx++;
      } else {
        // we can move to next tile for placement of carpet start
        // currently the carpetEndTile is only covered partially
        int partialCoverOfEndTile = max(0, carpetStartTile.at(0) + carpetLen - carpetEndTile.at(0));
        res = max(res, cover + partialCoverOfEndTile);
        cover -= (carpetStartTile.at(1) - carpetStartTile.at(0) + 1);
        carpetStartTileIdx++;
      }
    }

    return res;
  }
};
