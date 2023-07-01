import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Checkout from './pages/Checkout/Checkout';
import ProductDetail from './pages/ProductDetail/ProductDetail'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/Product-detail/:productId' element={<ProductDetail />}/>
        <Route path='/Checkout' element={<Checkout />}/>
      </Routes>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App
