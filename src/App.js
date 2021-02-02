import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
