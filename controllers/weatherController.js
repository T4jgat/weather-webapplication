class weatherController {
    getWeather = async (req, res) => {

        try {
            const cityName = req.query.city;
            console.log(cityName)
            const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}&units=metric`
            const weatherResponse = await fetch(WEATHER_API_URL);
            const weatherData = await weatherResponse.json()
            console.log("===== WEATHER ======")
            console.log(weatherData)

            const AIR_POLLUTION_API_URL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=${process.env.WEATHER_API_KEY}`
            const airPollutionResponse = await fetch(AIR_POLLUTION_API_URL)
            const airPollutionData = await airPollutionResponse.json()
            console.log("===== AIR =====")
            console.log(airPollutionData)

            res.render('index', {
                weatherData,
                airPollutionData,
                error: null,
                YANDEX_API_KEY: process.env.YANDEX_MAPS_API_KEY
            })
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
            console.error(`Internal server Error: ${error}`)
        }
    }
}

export default new weatherController()