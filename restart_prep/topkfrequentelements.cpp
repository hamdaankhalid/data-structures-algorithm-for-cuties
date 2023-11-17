#include <algorithm>
#include <utility>
#include <vector>
#include <unordered_map>

/**
 *
 * Magic equation for handling binary trees in the form of a vector
 * Given an index i:
 * parent -> (index - 2)/2
 * left -> (index*2) + 1
 * right -> (index*2) + 2
 * */
class MinHeap {
	std::vector<std::pair<int, int> > _internal;

	public:
		// insert at the end and bubble it up
		void push(int key, int val) {
			this->_internal.push_back(std::make_pair(key, val));
			int curr_elem_idx = this->_internal.size() - 1;
			for(;;) {
				int parent_idx = this->get_parent_idx(curr_elem_idx);
				if (parent_idx > -1) {
					// check if parent is less than curr elem
					if (this->_internal.at(parent_idx).first > this->_internal.at(curr_elem_idx).first) {
						// swap em
						std::pair<int, int> tmp = this->_internal[parent_idx];
						this->_internal[parent_idx] = this->_internal[curr_elem_idx];
						this->_internal[curr_elem_idx] = tmp;
						curr_elem_idx = parent_idx;
					} else {
						break;
					}
				} else {
					break;
				}
			}
		}

		// pop from the top
		// then replace the empty top
		// with the last element in our heap array
		// then bubble down the pesudo top performing swaps with the smaller of the two children
		std::pair<int, int> pop() {
			if (this->_internal.empty()) {
				return std::make_pair(-1, -1);
			}

			std::pair<int, int> popped = this->_internal[0];
			
			std::pair<int, int> current_last_item = this->_internal.back();
			this->_internal[0] = current_last_item;
			this->_internal.pop_back();
			// bubble down that pseudo root
			int curr_elem_idx = 0;
			for (;;) {
				// get the left and right children
				int left_idx = this->get_left_idx(curr_elem_idx);
				int right_idx = this->get_right_idx(curr_elem_idx);
				
				int idx_to_swap = curr_elem_idx;
				if (left_idx < this->_internal.size()) {
					idx_to_swap = left_idx;
				}
				if (right_idx < this->_internal.size()) {
					if (idx_to_swap != -1) {
						if (this->_internal[right_idx] < this->_internal[idx_to_swap]) {
							idx_to_swap = right_idx;
						}
					} else {
						idx_to_swap = right_idx;
					}
				}
				if (idx_to_swap == curr_elem_idx) {
					break;
				}

				// if our guy is bigger swap him with the lesser of the two
				if (this->_internal[curr_elem_idx] <= this->_internal[idx_to_swap]) {
					break;
				}
				// swap and set the curr_elem_idx
				std::pair<int, int> tmp = this->_internal[idx_to_swap];
				this->_internal[idx_to_swap] = this->_internal[curr_elem_idx];
				this->_internal[curr_elem_idx] = tmp;
				curr_elem_idx = idx_to_swap;
			}
			return popped;
		}
		
		int get_size() {
			return this->_internal.size();
		}

		std::vector<std::pair<int, int> >& get_raw() {
			return this->_internal;
		}

	private:

		inline const int get_parent_idx(int i) {
			return (i - 1)/2;
		}

		inline const int get_left_idx(int i) {
			return (i * 2) + 1;
		}

		inline const int get_right_idx(int i) {
			return (i * 2) + 2;
		}
};

class Solution {
public:
	std::vector<int> topKFrequent(std::vector<int>& nums, int k) {
		// create a  freq map
		std::unordered_map<int, int> freqs;
		for (int i : nums) {
			freqs[i]++;
		}


		// now create a min-heap of size k
		MinHeap h;
		// and keep pushing to it
		for (auto kv : freqs) {
			h.push(kv.second, kv.first);
			if (h.get_size() > k) {
				h.pop();
			}
		}

		std::vector<int> res;
		// because we use min heap will be removing the least numbered element at the root
		for (auto p : h.get_raw()) {
			res.push_back(p.second);
		}
		return res;
  }
};
