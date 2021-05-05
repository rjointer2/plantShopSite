
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Screens
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import CartScreen from "./screens/CartScreen/CartScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen";

// Components

import Navbar from './appComponents/NavBar/Navbar'


function App() {
  return (
    <div className='app'>
      {/* Navbar */}
      {/* Side Drawer */}
      {/* Backdrop */}
      <Router>
        <Navbar />
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
