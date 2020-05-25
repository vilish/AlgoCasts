const T = require('./index');
const Node = T.Trie;
const Trie = T.TrieNode;

describe('TrieNode', () => {
    test('TrieNode has a constructor function', () => {
        expect(typeof Node.prototype.constructor).toEqual('function');
    });
};