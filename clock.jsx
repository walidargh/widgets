var React = require('react');

var Clock = React.createClass({
  getInitialState: function (){
    return {date: new Date()};
  },

  componentDidMount: function(){
    var clock= this;
    this.interval = setInterval(function(){
      clock.setState({date: new Date()});
    }, 1000);
  },

  render: function(){
    return <div className="clock">{this.state.date.toString()}</div>;
  },

  componentWillUnmount: function(){
    clearInterval(this.interval);
  }

});


module.exports = Clock;
