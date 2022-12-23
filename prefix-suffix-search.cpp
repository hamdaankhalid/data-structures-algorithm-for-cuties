/**
 A Prefix-Trie and then filter remaining?

**/

class Node {
public:
    char val;
    std::unordered_map<char, shared_ptr<Node>> children;
    bool isEnd = false;

    Node(char initVal): val(initVal) {};
};

class Trie {
public:

    void Add(std::string& word){
        auto currNode = root;
        for (auto c : word) {
            if (currNode->children.find(c) == currNode->children.end()){
                currNode->children[c] = std::make_shared<Node>(c);
            }
            currNode = currNode->children.at(c);
        }
        currNode->isEnd = true;
    };

    std::vector<std::string> Search(std::string& prefix, std::string& suffix) {
        std::vector<std::string> res;
        auto curr = root;
        for (auto c : prefix) {
            if (curr->children.find(c) == curr->children.end()) {
                return res;
            }
            curr = curr->children.at(c);
        }

        // Now curr holds everything till prefix
        // Send it to perform collection via DFS
        collection(curr, prefix, suffix, res, prefix);

        return res;
    };

private:
    std::shared_ptr<Node> root = std::make_shared<Node>('*');

    void collection(std::shared_ptr<Node> n, std::string& prefix, std::string& suffix, std::vector<std::string>& res, std::string& running) {        
        if (n->isEnd && suffixMatch(running, suffix)) {
            res.push_back(running);
        }

        for (auto child : n->children) {
            running += child.first;
            collection(child.second, prefix, suffix, res, running);
            running = running.erase(running.size()-1);
        }
    };

    bool suffixMatch(std::string& word, std::string& suf) {

        if (word.size() < suf.size()) {
            return false;
        }

        for (int i = suf.size() - 1; i > -1; i--) {
            int offset = word.size() - i - 1;
            if ( word.at(offset) != suf.at(suf.size() - i - 1)) {
                return false;
            }
        }
        return true;
    };
};

class WordFilter {
public:
    WordFilter(std::vector<std::string>& words) {
        for (int i = 0; i < words.size();i++) {
            auto word = words[i];
            sidx[word] = i;
            t.Add(word);
        }
    };
    
    int f(std::string pref, std::string suff) {
        std::vector<std::string> a = t.Search(pref, suff);
        if (a.size() == 0) {
            return -1;
        }

        std::string big = biggestStr(a);
        return sidx.at(big);
    };
private:
    Trie t;
    std::unordered_map<std::string, int> sidx;

    std::string biggestStr(std::vector<std::string>& words) {
        std::string maxWord = words.at(0);
        int currMaxSize = -1;
        for (std::string word : words) {
            if (sidx.at(word) > currMaxSize) {
                maxWord = word;
                currMaxSize = sidx.at(word);
            }
        }
        std::cout << maxWord;
        return maxWord;
    }
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * WordFilter* obj = new WordFilter(words);
 * int param_1 = obj->f(pref,suff);
 */
 