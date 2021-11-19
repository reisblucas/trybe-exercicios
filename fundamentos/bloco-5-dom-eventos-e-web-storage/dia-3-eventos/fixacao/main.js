const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

const unordedList = document.getElementById('ulist');



window.onload = function selectMusic () {

  document.getElementsByTagName('main')[0].style.textAlign = 'center';

  const allLi = document.querySelectorAll('li')
  
  allLi[0].addEventListener('mousemove', function (event) {
    event.target.className = 'tech';
    event.target.innerText = 'A primeira mais tocada'
  })
  allLi[0].addEventListener('mouseout', function (event) {
    event.target.className = '';
    event.target.innerText = 'Clique aqui e ouça mais';
  })

  allLi[1].addEventListener('mousemove', function (event) {
    event.target.className = 'tech';
  })
  allLi[1].addEventListener('mouseout', function (event) {
    event.target.className = '';
  })

  allLi[2].addEventListener('mousemove', function (event) {
    event.target.className = 'tech';
  })
  allLi[2].addEventListener('mouseout', function (event) {
    event.target.className = '';
  })

  function resetText(event) {
    event.target.innerText = 'Opção reiniciada';
  }
  
  firstLi.addEventListener('dblclick', resetText);
  
  
let h3Selector = document.getElementsByTagName('h3')[0];

// function myFunction () {

//   let a = document.createElement('a');
//   let linkText = document.createTextNode(h3Selector.innerText);
//   a.appendChild(linkText);
//   a.title = 'Link para o meu GitHub'
//   a.href = 'https://github.com/byneur4l/trybe-exercicios'

//   let add = h3Selector.attributes[1].value;
//   document.getElementById('mySpotrybefy').innerHTML = add;

// }

// troca a cor do trybefy

h3Selector.addEventListener ('mousemove', function (event) {
  event.target.style.color = 'lightblue';
})
h3Selector.addEventListener ('mouseout', function (event) {
  event.target.style.color = 'white';
}) 
}



