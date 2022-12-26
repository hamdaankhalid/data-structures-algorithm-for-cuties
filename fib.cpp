class Solution {
public:
    int fib(int n) {
        if ( n == 0) {
            return 0;
        }

        if (n == 1) {
            return 1;
        }

        int p1 = 0;
        int p2 = 1;        
        int temp;
        for (int _ = 2; _ <= n; _++) {
            temp = p1;

            p1 = p2;
            p2 = temp + p2;
        }
        return p2;
    }
};
