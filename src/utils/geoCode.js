const request = require("request");
require("dotenv").config();

const geoCode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address
	)}.json?access_token=${process.env.ACCESS_TOKEN}`;

	request({ url, json: true }, (err, response) => {
		if (err) {
			callback(
				`Cannot connect to location service provided by ${err.hostname}`,
				undefined
			);
		} else if (response.body.features.length == 0) {
			callback(undefined, "Unable to find location");
		} else {
			callback(undefined, {
				location: response.body.features[0].place_name,
				lat: response.body.features[3].center[1],
				lon: response.body.features[3].center[0],
			});
		}
	});
};

module.exports = geoCode;
