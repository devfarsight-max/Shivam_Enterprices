import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Infrastructure from './pages/Infrastructure'
import Contact from './pages/Contact'
import './App.css'
export default function App(){return <BrowserRouter><Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="products" element={<Products/>}/><Route path="infrastructure" element={<Infrastructure/>}/><Route path="contact" element={<Contact/>}/></Route></Routes></BrowserRouter>}
