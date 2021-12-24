/*
Implement the RandomizedSet class:
RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.
*/


class RandomizedSet {
    private nums: number[];
    private pos: any;
    
    constructor() {
        this.nums = [];
        this.pos = new Map();
    }

    insert(val: number): boolean {
        if (val in this.pos){
            return false;
        }
        
        this.nums.push(val);
        this.pos[val] = this.nums.length-1;
        // console.log(this.nums, this.pos, `Inserted ${val}`);
        return true;
    }

    remove(val: number): boolean {
        if (!(val in this.pos )){
            return false;
        }
        
        const val_idx = this.pos[val];
        
        // console.log(this.nums, 'pre switch');
        
        const temp = this.nums[val_idx];
        this.nums[val_idx] = this.nums[this.nums.length-1];
        this.nums[this.nums.length - 1] = temp;
        
        // console.log(this.nums, 'after switch');
        this.pos[this.nums[val_idx]] = val_idx;
        
        this.nums.pop();
        delete this.pos[val];
        
        // console.log(this.nums, this.pos, `REMOVED ${val}`);
        return true;
    }

    getRandom(): number {
        const randomIdx = Math.floor(Math.random()*this.nums.length);
        return this.nums[randomIdx]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */