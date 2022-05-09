import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import NotFound from './pages/Shared/NotFound/NotFound';
import Blogs from './pages/Blogs/Blogs';
import ManageInventory from './pages/ProductDetails/ManageInventory/ManageInventory';
import AddItem from './pages/AddItem/AddItem';
import MyItem from './pages/MyItem/MyItem';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/productupdate/:productId' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>

        }></Route>
        <Route path='/manageInventory' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/myItem' element={<MyItem></MyItem>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
