# node-weather-app
This is weather application with nodejs backend server which is serving to handlebars template

I have created this application with node.js as the backend server. I've used two APIs for getting the weather inforamtion. First one is mapbox API which finds the latitude and longitude of the entered locaiton. Then passing the lat, lon location to the OpenweatherAPI for finding the weather information. The node.js API is served on the the custom endpoints on which the frontend can make use of the API and get weather information. Front end is served by handlebar templates.

![](weather-1.jpg)
#### Features:

-   Get weather information 
-   Search by city
-   Searhc by country
-   node.js server
-   Async await
-   HTTP requests
-   ES6 modules
-   handlebars templates engine

Commands for getting started

1. First you have to get all the dependencies installed

```
npm install
```

-   For starting the application

```
npm run start
```



