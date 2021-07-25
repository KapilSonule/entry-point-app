import './App.css';
import Home from './Component/Home.js'
import Header from './Component/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './Component/About';
import Contact from './Component/Contact';

function App() {
  return (
<BrowserRouter>
<div className="App">
      <Header/>
      <Switch>
      <Route exact path ="/" component={Home} />
      <Route exact path ="/about" component={About} />
      <Route exact path ="/contact" component={Contact} />
      </Switch>
      
     </div>
</BrowserRouter>
  );
}

export default App;
