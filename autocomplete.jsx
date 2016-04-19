var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function(){
    return {letters: ""};
  },

  handleInput: function (e) {
    this.setState( { letters: e.currentTarget.value } );
  },

  handleClick: function (e) {
    this.setState( {letters: e.target.innerHTML});
  },

  matchWords: function () {
    var matchedWords = this.props.words.filter(function (word) {
      var slicedWord = word.slice(0, this.state.letters.length);
      return (slicedWord === this.state.letters);
    }.bind(this));
    return matchedWords;
  },

  render: function () {
    return (
      <div>
        <input type="text" onInput={this.handleInput} value={this.state.letters}/>
          <ul onClick={this.handleClick}>{this.matchWords().map( function(word, index){
              console.log(word);
            return <li>{word}</li>;
            })
          }
          </ul>
      </div>
    );
  }
});

module.exports = Autocomplete;
