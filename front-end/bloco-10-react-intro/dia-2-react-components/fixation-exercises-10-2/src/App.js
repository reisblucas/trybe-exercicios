import React, { Component } from 'react';

// Fixação 1
// // 2 - Chame o componente Image , de forma que seja mostrada esta imagem, ou o texto Cute cat staring , caso a imagem não consiga ser carregada.
// R: Código abaixo.

// import Image from './components/Image';

// function App() {
//   return (
//     <div>
//       <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring'/>
//     </div>
//   );
// }

// export default App;


// Fixacao 2 - Coldplay - Album

// import './App.css';
// import Album from './components/Coldplay-Refactor';

//   // src/App.js
// class App extends React.Component {
//   render() {
//     const album01 = {
//       image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
//       title: 'Mylo Xyloto',
//       releaseDate: {
//         year: '2011',
//         month: '10',
//         day: '24',
//       },
//       others: {
//         recordCompany: 'Capitol, Parlophone',
//         formats: 'CD, digital'
//       }
//     };

//     const album02 = {
//       image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
//       title: 'Ghost Stories',
//       releaseDate: {
//         year: '2014',
//         month: '05',
//         day: '16',
//       },
//       others: {
//         recordCompany: 'Parlophone',
//         formats: 'CD, digital'
//       }
//     };

//     return (
//       <div className='App'>
//         <Album album={ album01 } />
//         <Album album={ album02 } />
//       </div>
//     );
//   }
// }

// export default App;

// Fixacao 3

// import './App.css';
// import UserProfile from './components/UserProfile';

// class App extends React.Component {
//   render () {
//     const joao = {
//       id: 102,
//       name: "João",
//       email: "joao@gmail.com",
//       avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
//     };

//     const amelia = {
//       id: 77,
//       name: "Amélia",
//       email: "amelia@gmail.com",
//       avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
//     };

//     return (
//       <div className='App'>
//         <UserProfile user={amelia} />
//         <UserProfile user={joao} />
//       </div>
//     );
//   }
// }

// export default App;

// Fixacao 4

// arquivo App.js, criado pelo create-react-app, modificado

// import './App.css';
// import Order from './components/Order';

// class App extends React.Component {
//   render() {
//     const headphone = {
//       id: 102,
//       user: "cena@gmail.com",
//       product: "Razer Headphone",
//       price: {
//         value: 99.99,
//         currency: "dollars"
//       }
//     };

//     const energyDrink = {
//       id: 77,
//       user: "cena@gmail.com",
//       product: "Monster 500mL",
//       price: {
//         value: 9.99,
//         currency: "dollars"
//       }
//     };

//     return (
//       <div className="App">
//         <h1> Orders recently created </h1>
//         <Order order={headphone} />
//         <Order order={energyDrink} />        
//       </div>
//     );
//   }
// }

// export default App;

// Fixacao 5 - Componentes e HOFS

// import ShoppingList from './components/ShoppingList';
// import './App.css';

// class App extends Component {
//   render () {
//     return (
//       <main className='App'>
//         <h2>Shopping List</h2>
//         <div className='App'>
//           <ul>
//             <ShoppingList/>
//           </ul>
//         </div>
//       </main>
//     )
//   }
// }

// export default App;

// Fixacao 6 - HOFS, index, key

// arquivo App.js, criado pelo create-react-app, modificado

import './App.css';
import UserProfile from './components/UserProfile';

class App extends Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      },
    ]

    return (
      <div className='App'>
        { users.map((user) => <UserProfile key = { user.id } user= { user } />) }
      </div>
    );
  }
}

export default App;
