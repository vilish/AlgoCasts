// 146. LRU Cache
// Medium

// 3402

// 127

// Favorite

// Share
// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
    this.size = capacity;
    this.data = [];
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.data[key]) {
        // move it to top
        // let value = this.data[key];
        // this.data[key] = undefined;
        // this.data.push(value);
        return this.data[key];
    }

    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

    console.log(this.size);

    if (this.data.length === this.size) {
        //put in least used index
        this.data.shift();
        this.data[key] = value;
    } else {
        this.data[key] = value;
    }



};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
console.log(cache.get(3));
console.log(cache.get(2));
console.log(cache.get(1));

module.exports = LRUCache;