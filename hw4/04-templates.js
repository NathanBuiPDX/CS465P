const express = require('express');
const axios = require('axios');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5001;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.com/v3.1/all';

// Add your code here

app.get('/', (req, res) => {
  // render pug template for the index.html file

  res.render('index', {
    heading: 'Countries of the World',
    main: 'Welcome to this application. Using the REST Countries API, we will be showing the countries and capitals of the world, the most populous countries in the world, and the number of countries in each region of the world',
  });
});

app.get('/capitals', async (req, res) => {
  // map the output array to create an array with country names and capitals
  // check for empty data in the output array

  let countries = [];
  try{
    let fetchedData = await axios.get(url);
    fetchedData.data.forEach(e => {
      let data = e.name.common + " - ";
      data += e.capital ? e.capital : "no data";
      countries.push(data);
    })
    countries.sort();
  }
  catch(err) {
    console.log(err);
    countries = ["ERROR: CANNOT GET DATA FROM URL"]
  }

  res.render('page', {
    heading: 'Countries and Capitals',
    results: countries,
  });
});

app.get('/populous', async (req, res) => {
  // filter the output array for the countries with population of 50 million or more
  // sort the resulting array to show the results in order of population
  // map the resulting array into a new array with the country name and formatted population

  let populous = [];
  try{
    let fetchedData = await axios.get(url);
    fetchedData.data.forEach(e => {
      if (e.population >= 50000000) {
        let data = {country: e.name.common, population: e.population};
        populous.push(data);
      }
    })
    populous.sort((a,b) => b.population - a.population);
    console.log(populous)
    populous = populous.map(e => `${e.country} - ${e.population}`);
  }
  catch(err) {
    console.log(err);
    countries = ["ERROR: CANNOT GET DATA FROM URL"]
  }
  res.render('page', {
    heading: 'Most Populous Countries',
    results: populous,
  });
});

app.get('/regions', async (req, res) => {
  // reduce the output array in a resulting object that will feature the numbers of countries in each region
  // disregard empty data from the output array

  let regions = [];
  let regionsObj = {};
  try{
    let fetchedData = await axios.get(url);
    fetchedData.data.forEach(e => {
      if (e.region in regionsObj) regionsObj[e.region]++;
      else regionsObj[e.region] = 1;
    })
    for(let key in regionsObj) regions.push(`${key} - ${regionsObj[key]}`);
  }
  catch(err) {
    console.log(err);
    countries = ["ERROR: CANNOT GET DATA FROM URL"]
  }
  res.render('page', {
    heading: 'Regions of the World',
    results: regions,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
