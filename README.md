[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=22200908&assignment_repo_type=AssignmentRepo)
# Weekly Weather Forecast

## Goal
Your task is to complete the missing parts of the provided code to:

- Fetch a 7-day weather forecast for a given latitude and longitude.
- Extract daily weather data:
  - `temperature_2m_max`
  - `temperature_2m_min`
  - `rain_sum`
  - `snowfall_sum`
  - `windspeed_10m_max`
- Convert dates to weekdays (e.g., "Monday", "Tuesday").
- Determine a simple weather condition for each day based on the data:
  - Rain → "Rainy"
  - Snow → "Snowy"
  - Wind > 15 km/h → "Windy"
  - Otherwise → "Sunny"
- Generate a weekly summary array in the format:
## Example Output
Wednesday: 18°C / 8°C (Sunny)
Thursday: 19°C / 9°C (Sunny)
Friday: 18°C / 9°C (Sunny)

## Requirements
- Use the Open-Meteo API endpoint: [https://api.open-meteo.com/v1/forecast](https://api.open-meteo.com/v1/forecast)
- Use `fetch()` to get the data.
- Process the daily data returned by the API into an array of objects.
- Use `.map()` to generate the weekly summary instead of `.forEach()`.
- Round temperatures to the nearest integer.

## Instructions
1. Complete the `fetchWeather` function to return a simplified daily data object with arrays for:
 - `time`
 - `temperature_2m_max`
 - `temperature_2m_min`
 - `rain_sum`
 - `snowfall_sum`
 - `windspeed_10m_max`
2. Complete the `getWeekday(dateString)` function to convert a date string to the weekday name.
3. Complete the `getWeatherCondition(rain, snowfall, windspeed)` function to determine the daily weather condition.
4. Generate the weekly summary using `.map()` and output the result as an array of formatted strings.

## Example Output
Wednesday: 18°C / 8°C (Sunny)
Thursday: 19°C / 9°C (Sunny)
Friday: 18°C / 9°C (Sunny)
Saturday: 17°C / 8°C (Sunny)
Sunday: 17°C / 8°C (Sunny)
Monday: 17°C / 8°C (Sunny)
Tuesday: 19°C / 8°C (Sunny)


## Notes
- Focus on functional programming with `.map()`.
- The goal is clean, readable, and maintainable code.
- You can change the location by updating latitude and longitude in the parameters.
