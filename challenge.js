const params = {
    latitude: 27.7017,
    longitude: 85.3206,
    daily: [
        "temperature_2m_max",
        "temperature_2m_min",
        "rain_sum",
        "snowfall_sum",
        "windspeed_10m_max",
        "precipitation_hours"
    ],
    timezone: "Asia/Singapore",
};

const queryString = new URLSearchParams(params).toString();
const url = `https://api.open-meteo.com/v1/forecast?${queryString}`;

async function fetchWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // 1️⃣ Extract only required daily data
        const dailyData = {
            time: data.daily.time,
            temperature_2m_max: data.daily.temperature_2m_max,
            temperature_2m_min: data.daily.temperature_2m_min,
            rain_sum: data.daily.rain_sum,
            snowfall_sum: data.daily.snowfall_sum,
            windspeed_10m_max: data.daily.windspeed_10m_max,
        };

        // 2️⃣ Return simplified daily data
        return dailyData;

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

async function generateWeeklySummary() {
    const dailyData = await fetchWeather();
    if (!dailyData) return;

    function getWeekday(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { weekday: "long" });
    }

    function getWeatherCondition(rain, snowfall, windspeed) {
        if (rain > 0) return "Rainy";
        if (snowfall > 0) return "Snowy";
        if (windspeed > 15) return "Windy";
        return "Sunny";
    }

    const weeklySummary = dailyData.time.map((date, index) => {
        const day = getWeekday(date);

        const maxTemp = dailyData.temperature_2m_max[index];
        const minTemp = dailyData.temperature_2m_min[index];

        const condition = getWeatherCondition(
            dailyData.rain_sum[index],
            dailyData.snowfall_sum[index],
            dailyData.windspeed_10m_max[index]
        );

        return `${day}: ${Math.round(maxTemp)}°C / ${Math.round(minTemp)}°C (${condition})`;
    });

    console.log(weeklySummary);
}

generateWeeklySummary();
