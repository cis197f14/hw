var Trie = function (words) {
  this.data = {};
  _.each(words, function (word) {
    this.addWord(word);
  }.bind(this));
};

Trie.prototype.addWord = function (word) {
  // TODO
};

Trie.prototype.getSuggestions = function(sub) {
  // TODO
  return [];
};

window.Trie = Trie;


// var trie = new Trie(['a', 'app', 'apps', 'try', 'tree', 'trek']);
// console.log(JSON.stringify(trie.data, null, '  '));

/*
Expected output:
{
  "A": {
    "end": true,
    "P": {
      "P": {
        "end": true,
        "S": {
          "end": true
        }
      }
    }
  },
  "T": {
    "R": {
      "Y": {
        "end": true
      },
      "E": {
        "E": {
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
Expected output: ["A", "APP", "APPS"]
*/

// console.log(trie.getSuggestions('t'));

/*
Expected output: ["TRY", "TREE", "TREK"]
*/

// console.log(trie.getSuggestions('trek'));

/*
Expected output: ["TREK"]
*/

// console.log(trie.getSuggestions(''));

/*
Expected output: []
*/
