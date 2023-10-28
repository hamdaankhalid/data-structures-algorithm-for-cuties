#include <string>
#include <vector>
#include <unordered_set>
#include <unordered_map>

/*
 *Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 * */
class Solution {
public:
    bool isValid(std::string s) {
		std::unordered_set<char> openers;
		openers.insert('(');
		openers.insert('{');
		openers.insert('[');

		std::vector<char> openedStack; 
		std::unordered_map<char, char> closeToOpen;
		closeToOpen.insert(std::make_pair(')', '('));
		closeToOpen.insert(std::make_pair('}', '{'));
		closeToOpen.insert(std::make_pair(']', '['));

		for (char c : s) {
			if (openers.find(c) != openers.end()) {
				openedStack.push_back(c);
			} else {
				if (!openedStack.empty() && openers.find(openedStack.back()) != openers.end()) {
					char expectedCloser = closeToOpen.at(c);
					if (expectedCloser == openedStack.back()) {
						openedStack.pop_back();
					} else {
						return false;
					}
				} else {
					return false;
				}
			}
		}

		return openedStack.size() == 0;
    }
};
