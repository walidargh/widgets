var React = require('react'),
    ReactDOM = require('react-dom'),
    Tabs = require("./tabs"),
    Clock = require("./clock"),
    Weather = require("./weather"),
    Autocomplete = require("./autocomplete");

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <div className="tabs-clock">
      <Tabs items={ [ {title:"Clock", content:<Clock/>},
                {title:"Weather", content:<Weather/>},
                {title: "Autocomplete",
                content:<Autocomplete words={dictionary}/>}] }/>

    </div>, document.getElementById('main')
  );

});

var dictionary = ["string", "straing", "this", "that",
 "something", "Snoop Dogg", "water", "Hobbit"];
