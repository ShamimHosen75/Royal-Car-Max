import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Rechart from './components/Rechart/Rechart';
import Reviews from './components/Reviews/Reviews';


function App() {
  return (
    <div className="App">
      <Container>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/dashboard' element={<Rechart></Rechart>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/review' element={<Reviews></Reviews>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
