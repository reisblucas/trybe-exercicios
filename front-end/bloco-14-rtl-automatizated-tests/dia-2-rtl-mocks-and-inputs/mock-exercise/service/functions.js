// const fetch = require("node-fetch");

const randomNumber = () => Math.round(Math.random() * 100);

const capitalizeEntireString = (str) => str.toUpperCase();

const onlyFirstLetter = (str) => str[0];

const concatStrings = (a, b) => `${a}${b}`;

const fetchDogApi = async () => {
  try {
    const url = 'https://dog.ceo/api/breeds/image/rando';
  
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
}

fetchDogApi();

module.exports = {
  randomNumber,
  capitalizeEntireString,
  onlyFirstLetter,
  concatStrings,
  fetchDogApi,
}