import './App.css';
import Overview from './page/Overview';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Overview/>
      </Router>
 
  </div>
  );
}

export default App;
