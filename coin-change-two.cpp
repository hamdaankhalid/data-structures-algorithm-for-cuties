class Solution {
public:
    int change(int amount, vector<int>& coins) {
        if (amount == 0) {
            return 1;
        }

        if (amount < 0 || coins.size() == 0) {
            return 0;
        }
        
        int lastcoin = coins[coins.size()-1];
        int includelastcoin = change(amount - lastcoin, coins);
        
        coins.erase(coins.end()-1);
        int skiplastcoin = change(amount, coins);
        coins.push_back(lastcoin);

        return includelastcoin + skiplastcoin;
    }
};
