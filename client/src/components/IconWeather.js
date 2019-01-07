import React from 'react'
import PropTypes from 'prop-types'

import { withBaseIcon } from 'react-icons-kit'
import { weather_sun } from 'react-icons-kit/linea/weather_sun'
import { weather_moon } from 'react-icons-kit/linea/weather_moon'
import { weather_hail } from 'react-icons-kit/linea/weather_hail'
import { weather_snow } from 'react-icons-kit/linea/weather_snow'
import { weather_mistyrain_sun } from 'react-icons-kit/linea/weather_mistyrain_sun'
import { weather_wind } from 'react-icons-kit/linea/weather_wind'
import { weather_fog } from 'react-icons-kit/linea/weather_fog'
import { weather_cloud } from 'react-icons-kit/linea/weather_cloud'
import { weather_variable_sun } from 'react-icons-kit/linea/weather_variable_sun'
import { weather_variable_halfmoon } from 'react-icons-kit/linea/weather_variable_halfmoon'

const icons = {
  'clear-day': weather_sun,
  'clear-night': weather_moon,
  rain: weather_hail,
  snow: weather_snow,
  sleet: weather_mistyrain_sun,
  wind: weather_wind,
  fog: weather_fog,
  cloudy: weather_cloud,
  'partly-cloudy-day': weather_variable_sun,
  'partly-cloudy-night': weather_variable_halfmoon
}

const SideIconContainer = withBaseIcon({ size: 120, style: { color: '#FFF' } })

const IconWeather = ({ name = 'clear-day' }) => {
  return <SideIconContainer icon={icons[name]} />
}

IconWeather.propTypes = { name: PropTypes.string }

export default IconWeather
