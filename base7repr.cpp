class Solution {
public:
    string convertToBase7(int num) {
        if (num == 0) {
            return "0";
        }
        
        int numero = abs(num);
        std::string res = "";

        while (numero != 0) {
            int remainder = numero % 7;
            res = std::to_string(remainder) + res;
            numero /= 7;
        }
        
        return num<0 ? "-"+res : res;
    }
};
