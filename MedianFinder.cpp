#include <vector>

/**
  Maintain an ordered list as a data member
  keep track of length
  each time we add an item we have a worst case O(N) run to add it and maintain sorted order
**/
namespace MedianStream
{
  using namespace std;

  class MedianFinder
  {
    vector<int> data;

  public:
    MedianFinder() {}

    void addNum(int num)
    {
      // binary search to place it
      int r = data.size() - 1;
      int l = 0;

      while (l <= r)
      {
        int mid = (r + l) / 2;

        if (num < data[mid])
        {
          r = mid - 1;
        }
        else
        {
          l = mid + 1;
        }
      }
      // this is a bottle neck because this is O(n)
      data.insert(data.begin() + l, num);
    }

    double findMedian()
    {

      int data_size = data.size();
      if (data_size % 2 == 0)
      {
        int num_1 = data[data_size / 2];
        int num_2 = data[(data_size / 2) - 1];
        return (num_1 + num_2) / (double)2;
      }
      else
      {
        return (double)data[data_size / 2]; // int division floors it inside for index
      }
    }
  };
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder* obj = new MedianFinder();
 * obj->addNum(num);
 * double param_2 = obj->findMedian();
 */