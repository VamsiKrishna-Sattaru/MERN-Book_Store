import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Home from './Components/Home'; // Correct spelling
import Login from './User/Login';
import Signup from './User/Signup';
import Unavbar from './User/Unavbar';
import Uhome from './User/Uhome';
import Products from './User/Products';
import Uitem from './User/Uitem';
import Myorders from './User/Myorders';
import OrderItem from './User/OrderItem';
import Wishlist from './User/Wishlist';

import Slogin from './Seller/Slogin';
import Ssignup from './Seller/Ssignup';
import Shome from './Seller/Shome';
import Addbook from './Seller/Addbook';
import Myproducts from './Seller/Myproducts';
import Book from './Seller/Book';
import Orders from './Seller/Orders';

import Alogin from './Admin/Alogin';
import Asignup from './Admin/Asignup';
import Ahome from './Admin/Ahome';
import Users from './Admin/Users';
import Seller from './Admin/Seller';
import Items from './Admin/Items';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        {/* Admin Routes */}
        <Route path='/alogin' element={<Alogin />} />
        <Route path='/asignup' element={<Asignup />} />
        <Route path='/ahome' element={<Ahome />} />
        <Route path='/users' element={<Users />} />
        <Route path='/sellers' element={<Seller />} />
        <Route path='/items' element={<Items />} />

        {/* Seller Routes */}
        <Route path='/slogin' element={<Slogin />} />
        <Route path='/ssignup' element={<Ssignup />} />
        <Route path='/shome' element={<Shome />} />
        <Route path='/myproducts' element={<Myproducts />} />
        <Route path='/addbook' element={<Addbook />} />
        <Route path='/book/:id' element={<Book />} />
        <Route path='/orders' element={<Orders />} />

        {/* User Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/uhome' element={<Uhome />} />
        <Route path='/uproducts' element={<Products />} />
        <Route path='/uitem/:id' element={<Uitem />} />
        <Route path='/orderitem/:id' element={<OrderItem />} />
        <Route path='/myorders' element={<Myorders />} />
        <Route path='/wishlist' element={<Wishlist />} />

        {/* Optional: Navbar Test */}
        <Route path='/nav' element={<Unavbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
