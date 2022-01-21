// ex 1 -> Resposta: ordem é A, B, C

// const planetDistanceFromSun = ({ name, order, distanceFromSun: { value, measurementUnit } }) =>
//   `${order} - ${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   order: 'A',
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   order: 'B',
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   order: 'C',
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log('-------------------');
// console.log('Exercício 1');
// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C 

// // ex 2 -> Resposta: A, C, B

// console.log('-------------------');
// console.log('Exercício 2');
// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// // ex 3 -> Resposta: Devo imprimir Marte depois de 4 segundos com a função setTimeout()

// const printExercise = (number) => {
//   console.log('-------------------');
//   console.log(`Exercício ${number}`);
// };

// setTimeout(() => printExercise(3), 3000);

// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   return console.log("Returned planet: ", mars);
// };

// setTimeout(getPlanet, 4000); // imprime Marte depois de 4 segundos

// // ex 4 -> Resposta: Devo implementar a função para retornar a temperatura atual em Marte, +/- 5s.

// // setTimeout(() => printExercise(4), 5000);

// // const messageDelay = (timeInMs) => Math.floor(Math.random() * timeInMs);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo

// const sendMarsTemperature = () => {
//   const message = `Mars temperature is ${getMarsTemperature()} degree Celsius.`
//   console.log(message);
// };

// setTimeout(sendMarsTemperature, messageDelay(5000)); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// ex 5 -> Quando receber, mandar uma resposta ao robô que está em Marte

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...

// const sendMarsTemperature = (tempInFahrenheit, greeting) => {
//   if (greeting === null) { temperatureInFahrenheit(getMarsTemperature()) };
//   if (tempInFahrenheit === null) { greet(getMarsTemperature()) };
// };

// sendMarsTemperature(temperatureInFahrenheit, null); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(null, greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// ex 6 tava de 60% de envio de mensagem

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...
// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// const sendMarsTemperature = (tempInFahrenheit, greeting, error) => {
//   const chance = Math.random() >= 0.6;
//   if (chance) {
//     if (greeting === null) { temperatureInFahrenheit(getMarsTemperature()) };
//     if (tempInFahrenheit === null) { greet(getMarsTemperature()) };
//   } else {
//     error('Robot is busy');
//   }
// };

// sendMarsTemperature(temperatureInFahrenheit, null, handleError); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(null, greet, handleError);

// ex 7



const uppercase = (str) => {
  setTimeout(() => {
    const upper = str.toUpperCase();
    console.log(upper);
    array.push(upper);
    console.log(array);
    callback(upper);
  }, 500);
};

// setTimeout(() => uppercase('stomatopoda'), 1000);

module.exports = uppercase;
