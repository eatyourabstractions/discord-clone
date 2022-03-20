
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



const HeaderHeroJsx = () => {
  return (
  <>
    <Header/>
    <Hero/>
  </>
  )
}

function App() {

  
  return (

       <Router>
       
      <Routes>
        <Route exact path="/"   element={<HeaderHeroJsx />} />
        <Route exact path="/channels"   element={<Home />} >
          <Route exact path=":id"   element={<Home />} />
        
        </Route>


        {/* <Route exact path="/channels">
          <Home />
        </Route>
        <Route exact path="/channels/:id">
          <Home />
        </Route> */}
      </Routes>
 
    </Router>

  );
}

export default App;


