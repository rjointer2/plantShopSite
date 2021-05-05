
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useState } from 'react';

// Screens
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import CartScreen from "./screens/CartScreen/CartScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen";

// Components

import Navbar from './appComponents/NavBar/Navbar'
import Backdrop from './appComponents/Backdrop/Backdrop';
import SideDrawer from './appComponents/SideDrawer/SideDrawer';

function App() {

  // if the state is false then the side bar doesn't show
  const [sideToggle, setSideToggle] = useState(false)

  return (
    <div className='app'>
      <Router>
        {/* Setting to true and then in the component below, setting the style to concat */}
        <Navbar click={() => setSideToggle(true)}/>
        <SideDrawer show={sideToggle}/>
        <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
          <main>
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/product/:id' component={ProductScreen} />
            <Route exact path='/cart' component={CartScreen} />
          </Switch>
          </main>
      </Router>
      {/* HomeScreen */}
      {/* ProductionScreen */}
      {/* CartScreen */}
    </div>
  );
}

export default App;
