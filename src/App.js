import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  Route,
  Router,
} from "react-router-dom";

import Home from './components/Accueil/accueil';
import Contact from './components/Contact/contact';
import Signin from './components/Signin/signin';
import NavbarComp from './components/Navbar/navbar';
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>okay</h1>
      <NavbarComp/>
      <Router>
                        <Route path="/Signin">
                            <Signin />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Router>
      {/* <Routes>
      
      <Route path='/Home' element={<Home />}> </Route>

    </Routes> */}

    </div>
  );
}

export default App;
