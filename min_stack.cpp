#include <memory>
#include<limits.h>

/**
 * QUESTION:
  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

  Implement the MinStack class:

  MinStack() initializes the stack object.
  void push(int val) pushes the element val onto the stack.
  void pop() removes the element on the top of the stack.
  int top() gets the top element of the stack.
  int getMin() retrieves the minimum element in the stack.
  You must implement a solution with O(1) time complexity for each function.
 * */

/**
 * ANSWER:
  A linked list data structure where each node stores latest pushed element as well as the last best

 * */


struct LinkedList {
  bool isDummy = false;
  int val;
  int minTillHere;
  std::shared_ptr<LinkedList> next;
  std::shared_ptr<LinkedList> prev;
};

class MinStack {
public:
    MinStack(): topOfList(std::make_shared<LinkedList>()) {
      topOfList->val = INT_MAX;
      topOfList->isDummy = true;
      topOfList->minTillHere = INT_MAX;
      topOfList->prev = nullptr;
    }
    
    void push(int val) {
      auto nextNode = std::make_shared<LinkedList>();
      nextNode->val = val;
      nextNode->minTillHere = std::min(val, topOfList->minTillHere);

      topOfList->next = nextNode;
      nextNode->prev = topOfList;
      topOfList = nextNode;
    }
    
    void pop() {
        // if we are only on our dummy at top dont pop
        if (topOfList->isDummy) {
          return;
        }
        auto currTop = topOfList;
        auto oneBeforeTop = topOfList->prev;
        topOfList = oneBeforeTop;
        currTop->prev = nullptr;
        topOfList->next = nullptr;
    }
    
    int top() {
      if (topOfList->isDummy) {
          return -1;
      }
      return topOfList->val;
    }
    
    int getMin() {
        if (topOfList->isDummy) {
          return -1;
      }
      return topOfList->minTillHere;
    }
private:
  std::shared_ptr<LinkedList> topOfList;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */