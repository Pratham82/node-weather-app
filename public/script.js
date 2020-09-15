const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const card = document.querySelector(".card");
const locationVal = document.querySelector(".location");
const forecastVal = document.querySelector(".forecast");

weatherForm.addEventListener("submit", (e) => {
	const location = search.value;

	fetch(`http://localhost:3000/weather?address=${location}`)
		.then((res) => res.json())
		.then((data) => {
			if (data.error) {
				locationVal.innerHTML = data.error;
				forecastVal.innerHTML = "";
			} else {
				locationVal.innerHTML = data.location;
				forecastVal.innerHTML = data.data;
			}
		})
		.catch((err) => {
			console.log(err);
		});

	e.preventDefault();
});
