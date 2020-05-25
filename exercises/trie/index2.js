const TrieNode = function () {
    this.children = new Map();
    this.endOfWord = false;
}
const Trie = function () {
    this.root = new TrieNode();
}
/**
 * Inserts a word into the trie.
 * Iterative Implementation
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let current = this.root;
    // look each char of the word inside trie children, if not there, insert.
    for (let i = 0; i < word.length; i++) {
        let char = word.charAt(i);
        let node = current.children.get(char);
        //if node doesn't exists in map, create one and put into map
        if (node === undefined) {
            node = new TrieNode();
            current.children.set(char, node);
        }
        current = node;
    }
    current.endOfWord = true;
};

/**
 * Returns if the word is in the trie.
 * Iterative Implementation
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let current = this.root;
    // look each char of the word inside trie children, if not there, return false.
    // if found return if it is end of the word or not there
    for (let i = 0; i < word.length; i++) {
        let char = word.charAt(i);
        let node = current.children.get(char);
        // if node does not exists, return false
        if (node === undefined) {
            return false;
        }
        current = node;
    }
    return current.endOfWord;
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {string}
 */
Trie.prototype.searchWith = function (prefix) {
    let result = [];
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
        let char = prefix.charAt(i);
        let node = current.children.get(char);
        // if node does not exists, return false
        if (node === undefined) {
            return false;
        }
        result.push(char);
        current = node;
    }
    while (current.endOfWord === false) {
        //iterate map till you get endOfWord 'true' in the node
        let char = current.children.keys().next().value;
        result.push(char);
        current = current.children.get(char);
    }

    return result.join('');
};


function ValidateInput() {
    let trie = new Trie();
    trie.insert('apple');
    let found = trie.search('apple');
    console.log(found);
    let word = trie.searchWith('app');
    console.log(word);
}

ValidateInput();
