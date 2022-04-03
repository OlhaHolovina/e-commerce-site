import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContext from "./contexts/main.context";
import {useState} from "react";
import Products from "./components/pages/Products";
import Login from "./components/pages/Login";

function App() {
  const [user, updateUser] = useState(null);
  const [shoppingCart, updateShoppingCart] = useState([]);

  return (
    <MainContext.Provider
      value={{
        user,
        updateUser,
        products: [
          {name: 'Progress', price: 10, img: 'img/snickers/Progress.jpg', id: 1},
          {name: 'Kindzer', price: 20, img: 'img/snickers/Kindzer.jpg', id: 2},
          {name: 'Canoa', price: 22, img: 'img/snickers/Canoa.jpg', id: 3},
          {name: 'Nike', price: 52, img: 'img/snickers/Nike.jpg', id: 4},
        ],
        shoppingCart,
        updateShoppingCart
      }}
    >
      <section className='app'>
        <Header/>
        {user && <Products />}
        {!user && <Login />}
        <Footer/>
      </section>
    </MainContext.Provider>
  );
}

export default App;
