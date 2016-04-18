var React = require('react'),
    ReactDOM = require('react-dom');

var Tabs = React.createClass({
  getInitialState: function () {
    return { focused: 0 };
  },

  clicked: function (index) {
    this.setState({focused: index });
  },

  render: function() {
    var self = this;

    return (
      <div>
        <ul>{ this.props.items.map(function(obj, index){
            var style = '';
            if(self.state.focused === index){
                style = 'focused';
            }
            return <h1 className={style} onClick=
              {self.clicked.bind(self, index)}>{obj.title}</h1>;
          })
        }
        </ul>
    
        <article>{this.props.items[this.state.focused].content}</article>
      </div>
    );

  }
});

module.exports = Tabs;
