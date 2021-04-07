import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component {

  renderWeather = (cityData) => {console.log(cityData)
    const name = cityData.city.name
    const temps = cityData.list.map(weather=>weather.main.temp)
    const pressures = cityData.list.map(weather=>weather.main.pressure)
    const humidities = cityData.list.map(weather=>weather.main.humidity)
    const {lon, lat} = cityData.city.coord
    return (
      <tr key={name}>
        {/* <td>{name}</td> */}
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempeture (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>  
      </table>
    )
  }
}

const stateToProps = (state) => {
  return {weather: state.weather}
}
 {/* const stateToProps = ({weather}) =>{ weather }  // same as up */}


export default connect(stateToProps)(WeatherList)
// export default WeatherList
