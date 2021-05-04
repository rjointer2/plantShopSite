
import './App.css';

// This provider will have any prop passed accessable throughtout the entire store
import { Provider } from 'react-redux';
import store from './appRedux/store';


function App() {
  return (
    // We are providing the store throughout the entire applciation
    <Provider store={store}>
      <div className="App">
          <PlantContainer/>
      </div>
    </Provider>
  );
}

export default App;
