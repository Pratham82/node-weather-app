const request = require("request");
require("dotenv").config();

const foreCast = (lat, lon, location, callback) => {
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${encodeURIComponent(
		lat
	)}&lon=${encodeURIComponent(lon)}&units=metric&appid=${
		process.env.API_KEY
	}`;

	request({ url, json: true }, (err, { body, statusCode }) => {
		if (err) {
			callback(
				`Cannot connect to weather  service provided by ${err.hostname}`,
				undefined
			);
		} else if (statusCode === 400) {
			callback(`Unable to find location`, undefined);
		} else {
			// const parsedData = JSON.parse(res.body);
			callback(
				undefined,
				`Its ${body.current.temp} °C, feels like ${
					body.current.feels_like
				} °C in ${location.split(",")[0]}, Today's forecast: ${
					body.current.weather[0].main
				}`
			);
		}
	});
};

module.exports = foreCast;
