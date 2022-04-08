import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Rechart from './Components/Rechart/Rechart';
import Reviews from './Components/Reviews/Reviews';

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
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/*' element={<Error></Error>}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
