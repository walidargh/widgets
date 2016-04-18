var React = require('react'),
    ReactDOM = require('react-dom'),
    Tabs = require("./tabs"),
    Clock = require("./clock"),
    Weather = require("./weather");

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <div className="tabs-clock">
      <Tabs items={ [ {title:"Clock", content:<Clock/>},
                {title:"Weather", content:<Weather/>} ] }/>
    </div>, document.getElementById('main')
  );

});
