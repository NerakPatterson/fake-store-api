import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavigationBar from './components/NavigationBar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import Home from './components/Home';
import EditProduct from './components/EditProduct';

 
function App() {
   return (
  
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<ProductList />}/>
          <Route path="/product/:id" element={<ProductDetails />}/>
          <Route path="/addproduct" element={<AddProduct/>}/>
           <Route path="*" element={<h1>404 Not Found</h1>} />
           <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </Router>
  
  );
}

export default App;
