/*
    A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

*/

interface FoundResponse {
    node: TrieNode | null;
    found: boolean;
}

interface TraverseResponse {
    didNotFind: string | null;
    lastNode: TrieNode;
}


class TrieNode {
    value: string;
    isEnd: boolean;
    links: TrieNode[];

    constructor(value: string){
        this.value = value;
        this.links = [] as TrieNode[];
        this.isEnd = false;
    }

    findNodeWithVal(value: string): FoundResponse{
        for(let node of this.links){
            if(node.value === value){
                return {
                    "node": node,
                    "found": true
                }
            }
        }
        return {
                    "node": null,
                    "found": false
                }
    }
}

class Trie {

    rootNode: TrieNode;

    constructor() {
        this.rootNode = new TrieNode("*"); 
    }

    insert(word: string): void {
        let currentNode = this.rootNode;
        for(let char of word){
            let {node, found} = currentNode.findNodeWithVal(char);
            if(found){
                currentNode = node;
            }else{
                let newNode = new TrieNode(char);
                currentNode.links.push(newNode);
                currentNode = newNode;
            }
        }
        currentNode.isEnd = true;
    }

    search(word: string): boolean {
        const {didNotFind, lastNode} = this.traverse(word);
        if(didNotFind !== null){
            return false;
        }
        return lastNode.isEnd;
    }

    startsWith(prefix: string): boolean {
        const {didNotFind, lastNode} = this.traverse(prefix);
        if(didNotFind !== null){
            return false;
        }
        return true;
    }

    private traverse(word: string): TraverseResponse{
        let currentNode = this.rootNode;
        for(let char of word){
            let {node, found} = currentNode.findNodeWithVal(char);
            if(!found){
                return {
                    didNotFind: char,
                    lastNode: currentNode
                };
            }
            currentNode = node;
        }
        
        return {
                didNotFind: null,
                lastNode: currentNode
            };
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */