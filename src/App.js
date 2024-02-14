import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Coffee from './Coffee'
import IceCream from './IceCream';

function App() {
  return (
    <div className="App">
    <Route exact path="/">
      <VendingMachine/>
      <Link to="/soda">Soda</Link>
      <Link to="/coffee">Coffee</Link>
      <Link to="/icecream">Ice Cream</Link>
    </Route>
    <Route  path="/soda">
      <Soda/>
      <Link to="/">Back</Link>
    </Route>
    <Route path="/coffee">
      <Coffee/>
      <Link to="/">Back</Link>
    </Route>
    <Route path="/icecream">
      <IceCream/>
      <Link to="/">Back</Link>
    </Route>
    </div>
  );
}

export default App;
