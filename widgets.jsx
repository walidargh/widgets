var React = require('react'),
    ReactDOM = require('react-dom'),
    Tabs = require("./tabs");

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Tabs items={ [ {title:"First Tab", content:"this is the first tab"},
                {title:"Second Tab", content:"this is the second tab"} ] }/>,
              document.getElementById('main')
  );
});
