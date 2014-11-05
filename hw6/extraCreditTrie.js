var ExtraCreditTrie = function (words) {
  this.data = {};
  _.each(words, function (word) {
    this.addWord(word);
  }.bind(this));
};

ExtraCreditTrie.prototype.addWord = function (word) {
  //TODO
};

ExtraCreditTrie.prototype.getSuggestions = function(sub) {
  // TODO
  return [];
};

window.ExtraCreditTrie = ExtraCreditTrie;

var trie = new ExtraCreditTrie(['a', 'app', 'apps', 'try', 'tree', 'treK', 'trek']);

// console.log(JSON.stringify(trie.data, null, '  '));
/*
Expected output:
{
  "a": {
    "end": true,
    "p": {
      "p": {
        "end": true,
        "s": {
          "end": true
        }
      }
    }
  },
  "t": {
    "r": {
      "y": {
        "end": true
      },
      "e": {
        "e": {
          "end": true
        },
        "k": {
          "end": true
        },
        "K": {
          "end": true
        }
      }
    }
  }
}
*/

// console.log(trie.getSuggestions('a'));
/*
Expected output: ['a', 'app', 'Apps']
*/
// console.log(trie.getSuggestions('t'));
/*
Expected output: ['try', 'tree', 'trek', 'treK']
*/
// console.log(trie.getSuggestions('trek'));
/*
Expected output: ['trek', 'treK']
*/
