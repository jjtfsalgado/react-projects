var React = require('react');

var WeatherMessage = React.createClass({
  render:function () {
    var {temp, location} = this.props;

    return(
      <div>
          <h1>The temperature in {location} is {temp}</h1>
      </div>
    );
  }
})

module.exports = WeatherMessage;
