import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from "./components/Detail/Detail";
import CreateBreed from "./components/CreateBreed/CreateBreed";

function App() {
  return (
    <BrowserRouter basename="/React">
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/home' component={Home}/>
          <Route path='/home/:id' component={Detail}/>
          <Route path='/createbreed' component={CreateBreed}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
