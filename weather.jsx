var React = require('react');

var Weather = React.createClass({
  getInitialState: function(){
    return {weather: "Raining Meatballs"};
  },
  getWeather: function () {
    navigator.geolocation.getCurrentPosition(this.AjaxResponse);
  },
  AjaxResponse: function (pos) {
    var self = this;
    var options = {
      type: 'GET',
      url: "http://api.openweathermap.org/data/2.5/find?APPID=645c5d39c7603f17e23fcaffcea1a3c1&lat="
      + pos.coords.latitude + "&lon=" +
        pos.coords.longitude + "&cnt=1",
      success: function(data) {
        console.log("We have your weather!");
        console.log(data);
        self.setState({weather: request.response});
      },
      error: function() {
        console.error("An error occured.");
      },
   };
    var request = new XMLHttpRequest();
    request.open(options.type, options.url, true);
    request.onload = function(e){
      if (request.status == 200){
        this.weather = request.response;
        options.success(request.response);
      }else{
        options.error(request.response);
      }
    };
    request.send(JSON.stringify(options.data));
    // return request.response
  },

  render: function(){
    return <div className="weather">{this.state.weather.toString()}</div>;
  },
  componentDidMount: function(){
    this.getWeather();
  }
});

module.exports = Weather;
